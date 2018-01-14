
README: MEGAN WHITE

------
DATA
------

I downloaded two original datasets for this visualization, the UN International Telecommunication Union's Access to Internet data for 2000-2016 (https://www.itu.int/en/ITU-D/Statistics/Pages/stat/default.aspx) and the World Bank's data on GDP per capita in constant 2010 dollars and population for 2000-2016 from their World Development Indicators databank (http://databank.worldbank.org/data/reports.aspx?source=world-development-indicators). Both of these files were available in Excel format. A file containing tabs for all the original downloads as well as a consolidated sheet is available in the data folder.

The first transformtion I needed to do was to create a consolidated sheet containing country name, year, population, region, GDP per capita for that year, and Internet access percent for that year, as mentioned above. To do this consolidation, I wrote an index match function in Excel to create one table. I then created a clean table on a new tab that removed any rows with blank cells, as these would not be readable by the D3 visualization. Finally, I saved the document as a CSV with UTF-8 encoding.

Next I needed to convert the cleaned data to a JSON format. To do so, I wrote two python scripts (writejson.py and convertjson.py), both of which are available in the data folder. The first script converts a CSV into a simple JSON with entries for every country and year (internet_gdp.json). However, in order to structure the JSON in a way that was readable by the D3 visualzation, I needed to convert my JSON into a format that was one big list whose elements included one dictionary for each country. Inside each country's dictionary, there were to be elements for name and region, and then three lists, one for GDP, one for population, and one for Internet percent, that contained a value and a year. The script convertjson.py accopmlishes this reformatting and creates a file that was easily read into the visualization (converted_internet_gdp.json).


---------
VISUALIZATION
---------

My visualization was originally designed by Romain Vuillemot (http://romsson.github.io/dragit/example/nations.html).

I made the following adjustments:
- Changed the data source to reflect GDP per capita and Internet access percentage
- Changed the timeline to 2000-2016
- Changed the colors and outline of each bubble
- Added a color-coded legend
- Adjusted the axes to better fit the data
- Added a resest button to refresh the page



Thank you for the experience!