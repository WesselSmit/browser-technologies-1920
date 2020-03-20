module.exports = data => {
	let anwsers = 0
	Object.entries(data.person).forEach(entry => {
		if (entry[1] != "") {
			anwsers++
		}
	})
	const person = (anwsers === Object.entries(data.person).length) ? true : false

	anwsers = 0
	Object.entries(data.favorites).forEach(entry => {
		if (entry[1] != "") {
			anwsers++
		}
	})
	const favorites = (anwsers === Object.entries(data.favorites).length) ? true : false

	anwsers = 0
	Object.entries(data.openQuestions).forEach(entry => {
		if (entry[1] != "") {
			anwsers++
		}
	})
	const openQuestions = (anwsers === Object.entries(data.openQuestions).length) ? true : false

	return [person, favorites, openQuestions]
}