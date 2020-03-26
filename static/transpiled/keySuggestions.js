"use strict";

if (localStorageAvailable()) {
  console.log('localStorage is supported and available');
  showKnownKeys();
} else {
  console.log('localStorage is not supported or not available');
  showImportancePopUp();
}

function showKnownKeys() {
  var knownKeys = getStoredKeys();
  var keyInput = document.getElementById('key');

  if (knownKeys.length > 0) {
    var suggestionText = document.createElement('p');
    suggestionText.id = 'suggestionText';
    var suggestionsList = document.createElement('ul');
    document.querySelector('fieldset').insertBefore(suggestionText, document.getElementById('key').nextSibling);
    document.querySelector('fieldset').insertBefore(suggestionsList, suggestionText.nextSibling);
    suggestionText.textContent = "Previous keys found in browser memory (from most to least recent):";
    knownKeys.forEach(function (key) {
      var suggestionListItem = document.createElement('li');
      document.querySelector('ul').append(suggestionListItem);
      var suggestionItem = document.createElement('input');
      suggestionItem.readOnly = true;
      suggestionItem.value = key;
      suggestionListItem.append(suggestionItem); //Replace placeholder as indicator for interaction on hover

      suggestionItem.addEventListener('mouseover', function (e) {
        return keyInput.placeholder = e.target.value;
      }); //Replace value/textContent on click

      suggestionItem.addEventListener('click', function (e) {
        return keyInput.value = e.target.value;
      }); //Replace value/textContent on focus

      suggestionItem.addEventListener('focus', function (e) {
        return keyInput.value = e.target.value;
      });
      suggestionItem.addEventListener('keyup', function (e) {
        if (e.code === 'Space') {
          keyInput.value = e.target.value;
          document.querySelector("form").submit();
        }
      });
    });
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
  var storage;

  try {
    storage = window['localStorage'];
    var x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (err) {
    return err instanceof DOMException && ( // everything except Firefox
    err.code === 22 || // Firefox
    err.code === 1014 || // test name field too, because code might not be present
    // everything except Firefox
    err.name === 'QuotaExceededError' || // Firefox
    err.name === 'NS_ERROR_DOM_QUOTA_REACHED') && // acknowledge QuotaExceededError only if there's something already stored
    storage && storage.length !== 0;
  }
}