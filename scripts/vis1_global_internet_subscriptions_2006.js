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
    .unitId('Country Code')
    .width(800)
    .height(600);

d3.csv('data/Fixed_broadband_2000-2016_with_country_codes.csv', function(error, data) {
    d3.select('#map2006')
        .datum(data)
        .call(map2k6.draw, map2k6);
});