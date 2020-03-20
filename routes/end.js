module.exports = (req, res) => {
	console.log('OPENQUESTIONS -- received data:', req.body)
	console.log('data needs to be saved') //todo
	res.render('end')
}