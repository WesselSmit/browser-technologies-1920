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
		suggestionText.id = 'suggestionText'
		const suggestionsList = document.createElement('ul')
		document.querySelector('fieldset').insertBefore(suggestionText, document.getElementById('key').nextSibling)
		document.querySelector('fieldset').insertBefore(suggestionsList, suggestionText.nextSibling)
		suggestionText.textContent = "Previous keys found in browser memory (from most to least recent):"

		knownKeys.forEach(key => {
			const suggestionListItem = document.createElement('li')
			document.querySelector('ul').append(suggestionListItem)
			const suggestionItem = document.createElement('input')
			suggestionItem.readOnly = true
			suggestionItem.value = key
			suggestionListItem.append(suggestionItem)


			//Replace placeholder as indicator for interaction on hover
			suggestionItem.addEventListener('mouseover', e => keyInput.placeholder = e.target.value)

			//Replace value/textContent on click
			suggestionItem.addEventListener('click', e => keyInput.value = e.target.value)

			//Replace value/textContent on focus
			suggestionItem.addEventListener('focus', e => keyInput.value = e.target.value)

			suggestionItem.addEventListener('keyup', e => {
				if (e.code === 'Space') {
					keyInput.value = e.target.value
					document.querySelector("form").submit()
				}
			})
		})
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