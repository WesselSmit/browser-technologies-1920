const uid = require('uid')

module.exports = (req, res) => {
	const key = uid(7)

	console.log('starting new session, key is: ', key)
	res.render('new', {
		key
	})
}