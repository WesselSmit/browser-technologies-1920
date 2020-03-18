module.exports = (req, res) => {
	const key = req.body.key
	console.log('start questionnaire, with key:', key)
	res.render('person', {
		key
	})
}