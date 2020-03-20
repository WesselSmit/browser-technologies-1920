const storage = require('#modules/storage.js')
const progress = require('#modules/progress.js')

module.exports = (req, res) => {
	const passedKey = req.body.key

	if (passedKey != "") {
		if (storage.checkIfFileExists(`./storage/${passedKey}.json`)) {
			const session = storage.getStoredData(`./storage/${passedKey}.json`)
			const progression = progress(session)

			if (!progression[0]) {
				console.log('person')
				res.render("person", {
					key: passedKey
				})
			} else if (!progression[1]) {
				console.log('favorites')
				res.render("favorites", {
					key: passedKey
				})
			} else if (!progression[2]) {
				console.log('openQuestions')
				res.render("openQuestions", {
					key: passedKey
				})
			} else {
				console.log('end')
				res.render('end')
			}
		} else {
			console.log('invalid key')
			res.render("invalidKey")
		}
	} else {
		console.log('start new session')
		res.redirect('/new')
	}
}