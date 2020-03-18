const storage = require('#modules/storage.js')
const uid = require('uid')

module.exports = (req, res) => {
	const passedKey = req.body.key

	if (passedKey != "") {
		if (storage.checkIfFileExists(`./storage/${passedKey}.json`)) {
			console.log('session exists')
		} else {
			console.log('wrong key')
		}
	} else {
		const key = uid(7)
		console.log('new session', 'new key:', key)
	}

	res.render('person')
}