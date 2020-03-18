const storage = require('#modules/storage.js')
const uid = require('uid')

module.exports = (req, res) => {
	const passedKey = req.body.key

	if (req.body.hasOwnProperty('tried')) { //User wants to try another key
		if (passedKey != "" && storage.checkIfFileExists(`./storage/${passedKey}.json`)) {
			console.log('session exists') //todo
		} else {
			console.log('invalid key')
			res.render("invalidKey")
		}
	} else {
		const key = uid(7)
		console.log('start new session', 'new key:', key) //todo
	}
}