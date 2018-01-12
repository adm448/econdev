
var format = d3.format(".2f");

// Set tooltips
var tip = d3.tip()
            .attr('class', 'd3-tip')
            .offset([-10, 0])
            .html(function(d) {
              var population;
              if (isNaN(d.population)) {
                population = 'not available';
              } else {
                population = format(d.population);
              }
              var population;
              if (isNaN(d.female)) {
                female = 'not available';
              } else {
                female = format(d.female);
              }
              var population;
              if (isNaN(d.male)) {
                male = 'not available';
              } else {
                male = format(d.male);
              }
              console.log(d);
              return "<strong>" + d.properties.name + "</strong><br></span>" + "%pt Internet Access Gender Gap: " + population +"<br><br></span>" + "<span class='details2'> % Female Internet Access: <span class='details'>" + female +"<br></span>"+ "% Male Internet Access: <span class='details'>" + male +"<br></span>";
            })

var margin = {top: 0, right: 20, bottom: 0, left: 120},
            width = 960 - margin.left - margin.right,
            height = 700 - margin.top - margin.bottom;

// Colours for countries and thresholds 
var legend_labels = ["Gap geater than -15%pt","-10 to -15%pt gap","-5 to -10%pt gap","-2 to -5%pt gap","0 to -2% gap","0 to +2% (no gap)","+2 to +5% (no gap)","+5 to +10% (no gap)","Greater than +10% (no gap)"]
var ext_color_domain = [-15,-10,-5,-2,0,2,5,10,15]
var color = d3.scaleThreshold()
  .domain([-15,-10,-5,-2,0,2,5,10])
  .range(["rgb(300,0,0", "rgb(255,43,0)", "rgb(255,129,0)", "rgb(255,159,0)", "rgb(255,195,77)","rgb(177,221,161)","rgb(102,141,60)","rgb (50,200,0)","rgb(0,300,0)"]);

var path = d3.geoPath();

var svg = d3.select("body")
            .append("svg")
            .attr("width", width)
            .attr ("class", "chart")
            .attr ("id", "gender-divide-map")
            .attr("height", height)
            .append('g')
            .attr('class', 'map');

var projection = d3.geoMercator()
                   .scale(130)
                  .translate( [width / 2, height / 1.5]);

var path = d3.geoPath().projection(projection);

svg.call(tip);

queue()
    .defer(d3.json, "data/world_countries.json")
    .defer(d3.tsv, "data/world_population.tsv")
    .await(ready);

function ready(error, data, population) {
  var populationById = {};
  var femaleById = {};
  var maleById = {};

  console.log(data);
  console.log(population);

  population.forEach(function(d) {
    populationById[d.id] = +d.population; 
    femaleById[d.id] = +d.female;
    maleById[d.id] = +d.male;
  });

  console.log(populationById);

  data.features.forEach(function(d) { 
    d.population = populationById[d.id] 
    d.female = femaleById[d.id];
    d.male = maleById[d.id];
  });

  svg.append("g")
      .attr("class", "countries")
    .selectAll("path")
      .data(data.features)
    .enter().append("path")
      .attr("d", path)
      .style("fill", function(d) { 
        if (isNaN(populationById[d.id])) {
          return 'lightgrey';
        } else {
          return color(populationById[d.id]);  
        }
      })
      .style('stroke', 'white')
      .style('stroke-width', 1.5)
      .style("opacity",0.8)
      // tooltips
        .style("stroke","white")
        .style('stroke-width', 0.3)
        .on('mouseover',function(d){
          tip.show(d);

          d3.select(this)
            .style("opacity", 1)
            .style("stroke","white")
            .style("stroke-width",3);
        })
        .on('mouseout', function(d){
          tip.hide(d);

          d3.select(this)
            .style("opacity", 0.8)
            .style("stroke","white")
            .style("stroke-width",0.3);
        });

  svg.append("path")
      .datum(topojson.mesh(data.features, function(a, b) { return a.id !== b.id; }))
       // .datum(topojson.mesh(data.features, function(a, b) { return a !== b; }))
      .attr("class", "names")
      .attr("d", path);
}

//Adding legend for Gender Map

var legend = svg.selectAll("g.legend")
.data(ext_color_domain)
.enter().append("g")
.attr("class", "legend")
.attr ("id", "legendid");

var ls_w = 20, ls_h = 20;

var legend_color = d3.scaleThreshold()
  .domain(ext_color_domain)
  .range(["rgb(300,0,0)", "rgb(255,43,0)", "rgb(255,129,0)", "rgb(255,159,0)", "rgb(255,195,77)","rgb(177,221,161)","rgb(102,141,60)","rgb (50,200,0)","rgb(30,270,0)"]);


legend.append("rect")
.attr("x", 20)
.attr("y", function(d, i){ return height - (i*ls_h) - 2*ls_h;})
.attr("width", ls_w)
.attr("height", ls_h)
.style("fill", function(d, i) { return legend_color(d); })
.style("opacity", 0.8);

legend.append("text")
.attr("x", 50)
.attr("y", function(d, i){ return height - (i*ls_h) - ls_h - 4;})
.text(function(d, i){ return legend_labels[i]; });

