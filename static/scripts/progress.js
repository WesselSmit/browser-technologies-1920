const form = document.querySelector('form')
const allInputs = form.querySelectorAll('input:not([type=hidden]):not([type=submit]), textarea, select')

allInputs.forEach(input => input.addEventListener('input', e => {
	console.log(e.target.value)
}))