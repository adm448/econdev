var map = d3.geomap()
    .geofile('../data/countries.json');

d3.select('#map')
    .call(map.draw, map);