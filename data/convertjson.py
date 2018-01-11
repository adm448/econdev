import json
from pprint import pprint

# write function to reformat json
def convert(json_data):
	output = []
	for country_dict in json_data:
		updated = False
		country_dict['year'] = int(country_dict['year'])
		country_dict['gdp_per_cap'] = float(country_dict['gdp_per_cap'])
		country_dict['internet_pct'] = float(country_dict['internet_pct'])
		# first, you need to check if that country is already in your output dict
		# if so, you append just the new internet and income values. If not, you need to create a new entry
		for dicti in output:
			if dicti['name'] == country_dict['country']:
				dicti['income'].append([country_dict['year'], country_dict['gdp_per_cap']])
				dicti['internet'].append([country_dict['year'],country_dict['internet_pct']])
				updated = True
		if not updated:
				output.append({'name': country_dict['country'], 'income':[[country_dict['year'],country_dict['gdp_per_cap']]],
					'internet':[[country_dict['year'],country_dict['internet_pct']]]})                       
	return output

# read in original json
with open('internet_gdp.json') as f:
	data = json.load(f)


# convert data
new_json = convert(data)

# write new json
with open('converted_internet_gdp.json', 'w') as f:
	json.dump(new_json, f)

	

