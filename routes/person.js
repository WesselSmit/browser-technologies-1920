const storage = require('#modules/storage.js')

module.exports = (req, res) => {
	const key = req.body.key
	const obj = {
		"key": key,
		"person": {
			"first_name": "",
			"surname": "",
			"gender": "",
			"age": "",
			"github": ""
		},
		"favorites": {
			"browser": "",
			"code_editor": "",
			"development": "",
			"indentation": "",
			"language": ""
		},
		"openQuestions": {
			"tip": "",
			"change": "",
			"upcoming": ""
		}
	}

	//todo: dit soort paths gaan kapot op heroku
	// storage.saveJSON(obj, `./storage/${key}.json`)
	storage.saveJSON(obj, `storage/${key}.json`)


	res.render('person', {
		key,
		data: obj
	})
}