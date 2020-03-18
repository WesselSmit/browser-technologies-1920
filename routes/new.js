const uid = require('uid')

module.exports = (req, res) => {
	const key = uid(7)

	console.log('starting new session, key is: ', key)
	//todo: render hier de persoonsgegevens vragen pagina
}