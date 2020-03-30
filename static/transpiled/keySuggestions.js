'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

if (documentBodyChecker() && documentChecker() && documentObjectChecker()) {
	console.log("All necessary JS features are available");
	if (localStorageAvailable()) {
		console.log('localStorage is supported and available');
		showKnownKeys();
	} else {
		console.log('localStorage is not supported or not available');
		showImportancePopUp();
	}
} else {
	console.log("Not all necessary JS features are available");
}

function showKnownKeys() {
	var knownKeys = getStoredKeys();
	var keyInput = document.getElementById('key');

	if (knownKeys.length > 0) {
		(function () {
			var suggestionText = document.createElement('p');
			var suggestionsList = document.createElement('ul');

			suggestionText.id = 'suggestionText';
			suggestionText.classList.add('fadeAnim');
			suggestionText.textContent = "Previous keys found in browser memory (from most to least recent):";

			document.querySelector('fieldset').insertBefore(suggestionText, document.getElementById('key').nextSibling);
			document.querySelector('fieldset').insertBefore(suggestionsList, suggestionText.nextSibling);

			var interval = 125;
			for (var i = 0; i < knownKeys.length; i++) {
				var fadeIn = function fadeIn(i) {
					var timeOut = setTimeout(function () {
						var suggestionListItem = document.createElement('li');
						var suggestionItem = document.createElement('input');

						suggestionItem.classList.add('suggestedKey');
						suggestionItem.readOnly = true;
						suggestionItem.value = knownKeys[i];

						document.querySelector('ul').appendChild(suggestionListItem);
						suggestionListItem.appendChild(suggestionItem);

						//Replace placeholder as indicator for interaction on hover
						suggestionItem.addEventListener('mouseover', function (e) {
							return keyInput.placeholder = e.target.value;
						});

						//Replace value/textContent on click
						suggestionItem.addEventListener('click', function (e) {
							return keyInput.value = e.target.value;
						});

						//Start session on space key
						suggestionItem.addEventListener('keyup', function (e) {
							if (e.code === 'Space') {
								keyInput.value = e.target.value;
								document.querySelector("form").submit();
							}
						});

						//Check for somer
						if ('append' in document && typeof document.body['append'] === 'function') {
							//Show key-instruction
							suggestionItem.addEventListener('focus', function (e) {
								var instruction = document.createElement('div');
								instruction.textContent = "Press spacebar to resume this session";
								instruction.classList.add('instruction');
								instruction.tabIndex = -1;
								suggestionItem.parentElement.append(instruction);

								e.target.addEventListener('blur', function (e) {
									return e.target.nextSibling.classList.add('hide');
								});
							});
						}
					}, i * interval + 500);
				};

				fadeIn(i);
			}
		})();
	}
}

function getStoredKeys() {
	var storedKeys = [];
	Object.keys(localStorage).forEach(function (key) {
		return storedKeys.push(key);
	});
	return storedKeys;
}

function showImportancePopUp() {
	var importanceMsg = document.createElement('h6');
	importanceMsg.textContent = "It appears you've disabled browser storage. This means you have to remember your key yourself because we can't!";
	document.querySelector('fieldset').insertBefore(importanceMsg, document.getElementById('key').nextSibling);
}

/* Best way to detect if localStorage is supported & available (taken from MDN: 
	https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#Testing_for_availability) */
function localStorageAvailable() {
	var storage = void 0;
	try {
		storage = window['localStorage'];
		var x = '__storage_test__';
		storage.setItem(x, x);
		storage.removeItem(x);
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
		storage && storage.length !== 0;
	}
}

//Check if minimal JS features are available

function documentChecker() {
	var features = ['querySelectorAll', 'addEventListener', 'insertBefore'];
	var checker = function checker(feature) {
		return feature in document && typeof document.body[feature] === 'function';
	};

	return features.every(checker);
}

function documentBodyChecker() {
	var features = ['setAttribute'];
	var checker = function checker(feature) {
		return feature in document.body && typeof document.body[feature] === 'function';
	};

	return features.every(checker);
}

function documentObjectChecker() {
	var features = ['classList', 'nextSibling'];
	var checker = function checker(feature) {
		return feature in document.documentElement && _typeof(document.body[feature]) === 'object';
	};

	return features.every(checker);
}