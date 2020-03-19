module.exports = (req, res) => {
	const key = req.body.key
	console.log('received data:', req.body)
	res.render('openQuestions', {
		key
	})
}