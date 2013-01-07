import os
import json
def filldata():
	champ_squares = os.listdir(os.path.abspath("app/img/champ_squares"))
	result = {}

	problem = []

	for champ in champ_squares:
		c_name = champ[:-13]
		c_square_url = "img/champ_squares/" + champ
		splashes = []
		splash_dir = os.listdir(os.path.abspath("app/img/champ_splash"))
		for splash in splash_dir:
			if c_name.lower() in splash.lower():
				splashes.append("img/champ_splash/"+splash)
				
		thumbs = []
		thumb_dir = os.listdir(os.path.abspath("app/img/champ_thumbs"))
		for thumb in thumb_dir:
			if c_name.lower() in thumb.lower():
				thumbs.append("img/champ_thumbs/"+thumb)

		if len(splashes) != len(thumbs):
			problem.append(c_name)
		result[c_name] = {'splashes': splashes, 'thumbs': thumbs}

	f = open('data.txt', 'w')

	f.write(json.dumps(result, sort_keys=True, indent=4, separators=(',', ': ')))
	f.close()
	print problem

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

def change_names():
	r = []
	f = open('skinnames.txt')
	cs = os.listdir(os.path.abspath("app/img/champ_splash"))
	cs2 = os.listdir(os.path.abspath("app/img/champ_thumbs"))
	for line in f:
		r.append(line.strip())

	f.close()

	for i in xrange(len(cs)):
		os.rename("app/img/champ_splash/"+cs[i], "app/img/champ_splash/"+str(i)+"_"+r[i]+"_splash.jpg")

	for i in xrange(len(cs2)):
		os.rename("app/img/champ_thumbs/"+cs2[i], "app/img/champ_thumbs/"+str(i)+"_"+r[i]+"_thumb.jpg")

	return [cs, r]