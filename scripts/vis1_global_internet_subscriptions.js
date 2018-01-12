var format = function(d) {
    d = d;
    return d3.format(',.02f')(d) + 'per 100';
}

var map = d3.geomap.choropleth()
    .geofile('econdev/data/countries.json')
    .colors(colorbrewer.Blues[9])
    .column('2016')
    .format(format)
    .legend(true)
    .unitId('Country Code');

d3.csv('econdev/data/Fixed_broadband_2000-2016_with_country_codes.csv', function(error, data) {
    d3.select('#map')
        .datum(data)
        .call(map.draw, map);
});