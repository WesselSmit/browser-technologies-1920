const form = document.querySelector('form')
const allInputs = form.querySelectorAll('input:not([type=hidden]):not([type=submit]), textarea, select')
const key = form.querySelector('input[type=hidden').value

allInputs.forEach(input => input.addEventListener('input', e => {
	const page = form.id
	const name = e.target.name
	const value = e.target.value
	const data = {
		key,
		page,
		name,
		value
	}

	updateSession(data)
}))

function getStoredData(key) {
	return JSON.parse(localStorage.getItem(key))
}

function storeData(key, session) {
	return localStorage.setItem(key, JSON.stringify(session))
}

function updateSession(data) {
	let session = getStoredData(data.key)
	session[data.page][data.name] = data.value
	storeData(data.key, session)
}