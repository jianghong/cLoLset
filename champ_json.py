from os import listdir
import json
def filljson():
	champ_squares = listdir("/Users/Jackson/Documents/ngjs/clolset/app/img/champ_squares")
	result = []

	for champ in champ_squares:
		c_name = champ[:-13]
		c_square_url = "img/champ_squares/" + champ

		splashes = []
		splash_dir = listdir("/Users/Jackson/Documents/ngjs/clolset/app/img/champ_splash")
		for splash in splash_dir:
			if c_name in splash:
				splashes.append("img/champ_splash/"+splash)
			


		thumbs = []
		thumb_dir = listdir("/Users/Jackson/Documents/ngjs/clolset/app/img/champ_thumbs")
		for thumb in thumb_dir:
			if c_name in thumb:
				thumbs.append("img/champ_thumbs/"+thumb)


		d = {'name': c_name, 'squreUrl': c_square_url, 'splashes': splashes, 'thumbs': thumbs}
		result.append(d)

	f = open('output.txt', 'w')

	f.write(json.dumps(result, sort_keys=True, indent=4, separators=(',', ': ')))
	f.close()