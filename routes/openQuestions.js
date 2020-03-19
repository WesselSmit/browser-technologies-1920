module.exports = (req, res) => {
	const key = req.body.key
	console.log('FAVORITES -- received data:', req.body)
	console.log('data needs to be saved')
	res.render('openQuestions', {
		key
	})
}