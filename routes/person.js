const storage = require('#modules/storage.js')
const uid = require('uid')

module.exports = (req, res) => {
	const passedKey = req.body.key

	if (passedKey != "" && storage.checkIfFileExists(`./storage/${passedKey}.json`)) {
		console.log('session exists')
	} else {
		const key = uid(7)
		console.log('new session', 'new key:', key)
	}

	res.render('person')
}