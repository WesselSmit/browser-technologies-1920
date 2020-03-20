const storage = require('#modules/storage.js')

module.exports = (req, res) => {
	const key = req.body.key
	const obj = {
		"key": key
	}

	storage.saveJSON(obj, `./storage/${key}.json`)

	res.render('person', {
		key
	})
}