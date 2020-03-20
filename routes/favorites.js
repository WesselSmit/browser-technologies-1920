const storage = require('#modules/storage.js')

module.exports = (req, res) => {
	const key = req.body.key
	const name = req.body.first_name //todo: deze moet niet uit de req komen maar uit het stored object zodat die altijd beschikbaar is
	const session = storage.getStoredData(`./storage/${key}.json`)

	session["person"] = req.body

	storage.saveJSON(session, `./storage/${key}.json`)

	res.render('favorites', {
		key,
		name
	})
}