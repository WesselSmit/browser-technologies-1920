module.exports = (req, res) => {
	const key = req.body.key
	console.log('OPENQUESTIONS -- received data:', req.body)
	console.log('data needs to be saved') //todo
	res.render('end')
}