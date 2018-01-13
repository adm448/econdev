var format = function(d) {
    d = d;
    return d3.format(',.02f')(d) + ' per 100 habitants';
}

var map2k6 = d3.geomap.choropleth()
    .geofile('data/countries.json')
    .colors(colorbrewer.Blues[9])
    .column('2006')
    .format(format)
    .legend(true)
    .unitId('Country Code');

d3.csv('data/Fixed_broadband_2000-2016_with_country_codes.csv', function(error, data) {
    d3.select('#map2006')
        .datum(data)
        .call(map2k6.draw, map2k6);
});
// Colours for countries and thresholds 
var legend_labels = ["0 to 6.21 per 100 habitants","6.22 to 12.41 per 100","12.42 to 18.62 per 100","18.63 to 24.83 per 100","24.84 to 31.03 per 100","31.04 to 37.24 per 100","37.25 to 43.45 per 100","43.46 to 49.65 per 100","49.66 to 55.86 per 100"]
var ext_color_domain = [-10,-5,-2,0,2,5,10]
var legend_color = d3.scaleThreshold()
  .domain(ext_color_domain)
  .range(["rgb(0,0,300)","rgb(139,0,0)","rgb(255,50,0)", "rgb(255,129,0)", "rgb(255,159,0)", "rgb(255,195,77)","rgb(177,221,161)","rgb(102,141,60)","rgb(0,300,0)"]);


var color = d3.scaleThreshold()
  .domain([-15,-10,-5,-2,0,2,5,10])
  .range(["rgb(139,0,0)", "rgb(255,50,0)", "rgb(255,129,0)", "rgb(255,159,0)", "rgb(255,195,77)","rgb(177,221,161)","rgb(102,141,60)","rgb (50,200,0)","rgb(0,300,0)"]);
