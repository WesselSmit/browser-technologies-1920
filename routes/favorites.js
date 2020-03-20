const storage = require('#modules/storage.js')

module.exports = (req, res) => {
	const key = req.body.key
	const session = storage.getStoredData(`./storage/${key}.json`)

	session["person"] = req.body
	delete session["person"].key

	const name = session.person.first_name

	storage.saveJSON(session, `./storage/${key}.json`)

	res.render('favorites', {
		key,
		name,
		data: session
	})
}