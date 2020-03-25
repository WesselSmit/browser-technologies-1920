(function () {
	const form = document.querySelector('form')
	const allInputs = form.querySelectorAll('input:not([type=hidden]):not([type=submit]), textarea, select')
	const key = form.querySelector('input[type=hidden').value

	const onInput = debounce((e) => {
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
	}, 250)

	allInputs.forEach(input => input.addEventListener('input', onInput))
}())








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


//Debounce function taken from: https://davidwalsh.name/javascript-debounce-function
function debounce(func, wait, immediate) {
	var timeout
	return function () {
		var context = this,
			args = arguments
		var later = function () {
			timeout = null
			if (!immediate) func.apply(context, args)
		};
		var callNow = immediate && !timeout
		clearTimeout(timeout)
		timeout = setTimeout(later, wait)
		if (callNow) func.apply(context, args)
	};
};