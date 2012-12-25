import os
import json
def filldata():
	champ_squares = os.listdir(os.path.abspath("app/img/champ_squares"))
	result = {}

	for champ in champ_squares:
		c_name = champ[:-13]
		c_square_url = "img/champ_squares/" + champ

		splashes = []
		splash_dir = os.listdir(os.path.abspath("app/img/champ_splash"))
		for splash in splash_dir:
			if c_name in splash:
				splashes.append("img/champ_splash/"+splash)
			


		thumbs = []
		thumb_dir = os.listdir(os.path.abspath("app/img/champ_thumbs"))
		for thumb in thumb_dir:
			if c_name in thumb:
				thumbs.append("img/champ_thumbs/"+thumb)


		result[c_name] = {'splashes': splashes, 'thumbs': thumbs}

	f = open('data.txt', 'w')

	f.write(json.dumps(result, sort_keys=True, indent=4, separators=(',', ': ')))
	f.close()


def fillsquares():
	champ_squares = os.listdir(os.path.abspath("app/img/champ_squares"))
	result = []

	for champ in champ_squares:
		c_name = champ[:-13]
		c_square_url = "img/champ_squares/" + champ

		result.append({'name':c_name, 'squareUrl': c_square_url})

	f = open('squares.txt', 'w')

	f.write(json.dumps(result, sort_keys=True, indent=4, separators=(',', ': ')))
	f.close()
