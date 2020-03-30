if (localStorageAvailable()) {
	console.log('localStorage is supported and available')
	showKnownKeys()
} else {
	console.log('localStorage is not supported or not available')
	showImportancePopUp()
}

function showKnownKeys() {
	const knownKeys = getStoredKeys()
	const keyInput = document.getElementById('key')

	if (knownKeys.length > 0) {
		const suggestionText = document.createElement('p')
		const suggestionsList = document.createElement('ul')

		suggestionText.id = 'suggestionText'
		suggestionText.classList.add('fadeAnim')
		suggestionText.textContent = "Previous keys found in browser memory (from most to least recent):"

		document.querySelector('fieldset').insertBefore(suggestionText, document.getElementById('key').nextSibling)
		document.querySelector('fieldset').insertBefore(suggestionsList, suggestionText.nextSibling)

		let interval = 125
		for (let i = 0; i < knownKeys.length; i++) {
			function fadeIn(i) {
				let timeOut = setTimeout(function () {
						const suggestionListItem = document.createElement('li')
						const suggestionItem = document.createElement('input')

						suggestionItem.classList.add('suggestedKey')
						suggestionItem.readOnly = true
						suggestionItem.value = knownKeys[i]

						document.querySelector('ul').appendChild(suggestionListItem)
						suggestionListItem.appendChild(suggestionItem)


						//Replace placeholder as indicator for interaction on hover
						suggestionItem.addEventListener('mouseover', e => keyInput.placeholder = e.target.value)

						//Replace value/textContent on click
						suggestionItem.addEventListener('click', e => keyInput.value = e.target.value)

						//Start session on space key
						suggestionItem.addEventListener('keyup', e => {
							if (e.code === 'Space') {
								keyInput.value = e.target.value
								document.querySelector("form").submit()
							}
						})

						//Show key-instruction
						suggestionItem.addEventListener('focus', e => {
							const instruction = document.createElement('div')
							instruction.textContent = "Press spacebar to resume this session"
							instruction.classList.add('instruction')
							instruction.tabIndex = -1
							suggestionItem.parentElement.insertBefore(instruction, suggestionItem.nextSibling)

							e.target.addEventListener('blur', e => e.target.nextSibling.classList.add('hide'))
						})
					},
					i * interval + 500)
			}
			fadeIn(i)
		}
	}
}



function getStoredKeys() {
	let storedKeys = []
	Object.keys(localStorage).forEach(key => storedKeys.push(key))
	return storedKeys
}


function showImportancePopUp() {
	const importanceMsg = document.createElement('h6')
	importanceMsg.textContent = "It appears you've disabled browser storage. This means you have to remember your key yourself because we can't!"
	document.querySelector('fieldset').insertBefore(importanceMsg, document.getElementById('key').nextSibling)
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