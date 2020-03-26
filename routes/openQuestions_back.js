const storage = require('#modules/storage.js')

module.exports = (req, res) => {
	const key = req.params.id
	const session = storage.getStoredData(`./storage/${key}.json`)

	res.render('openQuestions', {
		key,
		data: session
	})
}