import csv
import json

#read csv
with open('internet_gdp.csv',) as f:
    reader = csv.DictReader(f)
    rows = list(reader)

#write json
with open('internet_gdp.json', 'w') as f:
    json.dump(rows, f, indent=2)