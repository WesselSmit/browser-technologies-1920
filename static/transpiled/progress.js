'use strict';

if (localStorageAvailable()) {
	console.log('localStorage is supported and available');
	fillInKnownDataFromLS();
	updateLocalStorage();
} else {
	console.log('localStorage is not supported or not available');
}

//Give formatted input hint
if (document.getElementById('person')) {
	var formattedInput = document.getElementById('age');
	var formatInfo = document.createElement('p');
	formatInfo.textContent = "Only digits allowed [0-9]";
	formatInfo.classList.add('additionalInfo');
	document.querySelector('form > fieldset').insertBefore(formatInfo, formattedInput);
}

function updateLocalStorage() {
	var form = document.querySelector('form');
	var allInputs = form.querySelectorAll('input:not([type=hidden]):not([type=submit]), textarea, select');
	var key = form.querySelector('input[type=hidden').value;

	var onInput = debounce(function (e) {
		var page = form.id;
		var name = e.target.name;
		var value = e.target.value;
		var data = {
			key: key,
			page: page,
			name: name,
			value: value
		};

		updateSession(data);
	}, 250);

	allInputs.forEach(function (input) {
		return input.addEventListener('input', onInput);
	});
}

function fillInKnownDataFromLS() {
	var form = document.querySelector('form');
	var key = form.querySelector('input[type=hidden').value;
	var storedData = getStoredData(key);

	Object.values(storedData).forEach(function (val, i) {
		if (i > 0) {
			Object.entries(val).forEach(function (item) {
				var input = document.querySelector('[name=' + item[0] + ']');
				if (input != null) {
					if (input.type === 'text' && input.value === "") {
						input.value = item[1];
					} else if (input.type === 'radio') {
						var radioInput = document.querySelectorAll('[name=' + item[0] + ']');
						radioInput.forEach(function (radio) {
							if (radio.value === item[1]) {
								radio.checked = true;
							}
						});
					} else if (input.tagName === 'SELECT') {
						var options = input.querySelectorAll('option');
						options.forEach(function (option) {
							if (option.value === item[1]) {
								option.selected = true;
							}
						});
					} else if (input.tagName === 'TEXTAREA') {
						input.value = item[1];
					}
				}
			});
		}
	});
}

var submitButton = document.querySelector('[type=submit]');
submitButton.addEventListener('click', validation);

function validation() {
	var form = document.querySelector('form');
	var allInputs = form.querySelectorAll('input:not([type=hidden]):not([type=submit]), textarea, select');
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = allInputs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var input = _step.value;

			input.classList.remove('required');
			document.querySelector('[for=' + input.id + ']').classList.remove('requiredLabel');
			if (input.type === 'text') {
				if (input.value === "") {
					input.classList.add('required');
					document.querySelector('[for=' + input.id + ']').classList.add('requiredLabel');
				}
			} else if (input.tagName === 'SELECT') {
				var selectEl = document.querySelector('select');
				if (selectEl.value === '') {
					selectEl.classList.add('required');
					document.querySelector('[for=' + input.id + ']').classList.add('requiredLabel');
				}
			} else if (input.tagName === 'TEXTAREA') {
				if (input.value === '') {
					input.classList.add('required');
					document.querySelector('[for=' + input.id + ']').classList.add('requiredLabel');
				}
			} else if (input.type === 'radio') {
				var radioPair = input.parentElement;
				console.log(radioPair);
			}
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}
}

// Helper functions:

function getStoredData(key) {
	return JSON.parse(localStorage.getItem(key));
}

function storeData(key, session) {
	return localStorage.setItem(key, JSON.stringify(session));
}

function updateSession(data) {
	var session = getStoredData(data.key);
	session[data.page][data.name] = data.value;
	storeData(data.key, session);
}

//Debounce function taken from: https://davidwalsh.name/javascript-debounce-function
function debounce(func, wait, immediate) {
	var timeout;
	return function () {
		var context = this,
		    args = arguments;
		var later = function later() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
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