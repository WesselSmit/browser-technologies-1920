module.exports = (req, res) => {
	const key = req.body.key
	const name = req.body.first_name
	console.log('PERSON -- received data:', req.body)
	console.log('data needs to be saved') //todo
	res.render('favorites', {
		key,
		name
	})
}