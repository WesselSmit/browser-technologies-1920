const storage = require('#modules/storage.js')
const uid = require('uid')

module.exports = (req, res) => {
	const key = uid(7)

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

	console.log('starting new session, key is: ', key)
	res.render('new', {
		key
	})
}