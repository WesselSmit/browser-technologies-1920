const storage = require('#modules/storage.js')

module.exports = (req, res) => {
	const passedKey = req.body.key

	if (passedKey != "") {
		if (storage.checkIfFileExists(`./storage/${passedKey}.json`)) {
			console.log('session exists') //todo
		} else {
			console.log('invalid key')
			res.render("invalidKey")
		}
	} else {
		console.log('start new session')
		res.redirect('/new')
	}
}