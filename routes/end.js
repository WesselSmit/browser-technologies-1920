const storage = require('#modules/storage.js')

module.exports = (req, res) => {
	const key = req.body.key
	const session = storage.getStoredData(`./storage/${key}.json`)

	session["openQuestions"] = req.body

	storage.saveJSON(session, `./storage/${key}.json`)

	res.render('end')
}