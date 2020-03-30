if (localStorageAvailable()) {
	console.log('localStorage is supported and available')
	fillInKnownDataFromLS()
	updateLocalStorage()
} else {
	console.log('localStorage is not supported or not available')
}



//Give formatted input hint
if (document.getElementById('person')) {
	const formattedInput = document.getElementById('age')
	const formatInfo = document.createElement('p')

	formatInfo.textContent = "Only digits allowed [0-9]"
	formatInfo.classList.add('additionalInfo')

	document.querySelector('form > fieldset').insertBefore(formatInfo, formattedInput)
}






function updateLocalStorage() {
	const form = document.querySelector('form')
	const allInputs = form.querySelectorAll('input:not([type=hidden]):not([type=submit]), textarea, select')
	const key = form.querySelector('input[type=hidden').value

	const onInput = debounce((e) => {
		const data = {
			key,
			page: form.id,
			name: e.target.name,
			value: e.target.value
		}

		updateSession(data)
	}, 250)

	allInputs.forEach(input => input.addEventListener('input', onInput))
}





function fillInKnownDataFromLS() {
	const form = document.querySelector('form')
	const key = form.querySelector('input[type=hidden').value
	const storedData = getStoredData(key)

	Object.values(storedData).forEach((val, i) => {
		if (i > 0) {
			Object.entries(val).forEach(item => {
				const input = document.querySelector(`[name=${item[0]}]`)

				if (input != null) {
					if (input.type === 'text' && input.value === "") {
						input.value = item[1]

					} else if (input.type === 'radio') {
						const radioInput = document.querySelectorAll(`[name=${item[0]}]`)
						radioInput.forEach(radio => {
							if (radio.value === item[1]) {
								radio.checked = true
							}
						})

					} else if (input.tagName === 'SELECT') {
						const options = input.querySelectorAll('option')
						options.forEach(option => {
							if (option.value === item[1]) {
								option.selected = true
							}
						})

					} else if (input.tagName === 'TEXTAREA') {
						input.value = item[1]
					}
				}
			})
		}
	})

	//Fix "anonymous" in title
	let nameInTitle = document.querySelector('strong')
	if (nameInTitle.textContent.includes('anonymous,')) {
		nameInTitle.textContent = storedData.person.first_name + ", "
	}
}




const submitButton = document.querySelector('[type=submit]')
submitButton.addEventListener('click', validation)


function validation() {
	const form = document.querySelector('form')
	const allInputs = form.querySelectorAll('input:not([type=hidden]):not([type=submit]), textarea, select')
	let hasInvalidInput = false

	for (const input of allInputs) {
		input.classList.remove('required')

		if (input.type === 'text') {
			if (input.value === "") {
				input.classList.add('required')
				hasInvalidInput = true
			}

		} else if (input.tagName === 'SELECT') {
			const selectEl = document.querySelector('select')
			if (selectEl.value === '') {
				selectEl.classList.add('required')
				hasInvalidInput = true
			}

		} else if (input.tagName === 'TEXTAREA') {
			if (input.value === '') {
				input.classList.add('required')
				hasInvalidInput = true
			}

		} else if (input.type === 'radio') {
			const radioContainer = input.parentElement
			radioContainer.classList.add('requiredField')
			for (const radio of radioContainer.querySelectorAll('input[type=radio')) {
				if (radio.checked) {
					radioContainer.classList.remove('requiredField')
				}
			}
		}
	}

	let selectEl = document.querySelector('select')
	if (hasInvalidInput) {
		if (selectEl === null) {
			invalidMsg()
		} else {
			if (selectEl.value === "") {
				invalidMsg()
			}
		}
	}
}


function invalidMsg() {
	let invalidMSGExists = document.getElementById('invalidMSG')

	if (!invalidMSGExists) {
		let invalidMsg = document.createElement('div')

		invalidMsg.id = "invalidMSG"
		invalidMsg.innerHTML = "Complete the form before submitting!<span>Incomplete anwsers are highlighted.</span>"

		document.querySelector('body').insertBefore(invalidMsg, document.querySelector('form'))
	}
}




// Helper functions:

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
	let timeout
	return function () {
		let context = this,
			args = arguments
		let later = function () {
			timeout = null
			if (!immediate) func.apply(context, args)
		}
		let callNow = immediate && !timeout
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