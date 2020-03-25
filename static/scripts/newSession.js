//Auto select the key-text to make it easier to copy for the user
const keyCodeElement = document.getElementById('keyCode')
keyCodeElement.select()



//Check if localStorage is both supported & available (enabled)
if (localStorageAvailable()) {
	console.log('localStorage is supported and available')
	const keyCode = keyCodeElement.value
	const emptyState = {
		"key": keyCode,
		"person": {
			"first_name": "",
			"surname": "",
			"gender": "",
			"age": "",
			"github": ""
		},
		"favorites": {
			"browser": "",
			"code_editor": "",
			"development": "",
			"indentation": "",
			"language": ""
		},
		"openQuestions": {
			"tip": "",
			"change": "",
			"upcoming": ""
		}
	}
	localStorage.setItem(keyCode, JSON.stringify(emptyState))
} else {
	console.log('localStorage is not supported or not available')
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