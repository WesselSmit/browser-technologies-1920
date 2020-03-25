if (localStorageAvailable()) {
	console.log('localStorage is supported and available')
	update()
} else {
	console.log('localStorage is not supported or not available')
}

function update() {
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
}








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
		}
		var callNow = immediate && !timeout
		clearTimeout(timeout)
		timeout = setTimeout(later, wait)
		if (callNow) func.apply(context, args)
	}
}



/* Best way to detect if localStorage is supported & available (taken from MDN: 
	https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#Testing_for_availability) */
function localStorageAvailable() {
	let storage
	try {
		storage = window['localStorage']
		const x = '__storage_test__'
		storage.setItem(x, x)
		storage.removeItem(x)
		return true;
	} catch (err) {
		return err instanceof DOMException && (
				// everything except Firefox
				err.code === 22 ||
				// Firefox
				err.code === 1014 ||
				// test name field too, because code might not be present
				// everything except Firefox
				err.name === 'QuotaExceededError' ||
				// Firefox
				err.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
			// acknowledge QuotaExceededError only if there's something already stored
			(storage && storage.length !== 0)
	}
}