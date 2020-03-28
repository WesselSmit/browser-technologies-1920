//Remove ordinary fade-in animation
const animatedEl = document.querySelector('.fadeAnim')
animatedEl.classList.remove('fadeAnim')

//Add enhanced animation intro
animatedEl.classList.add('enhancedAnimIn')

//Add enhanced animation outro
const navButtons = document.querySelectorAll('a, input[type=submit]')
for (const button of navButtons) {
	button.addEventListener('click', function (e) {
		var form = document.querySelector('form')
		e.preventDefault()

		form.classList.add('enhancedAnimOut')
		if (e.target.tagName === 'A') {
			var link = e.target.href
			setTimeout(function () {
				window.location.href = link
			}, 500)
		} else {
			setTimeout(function () {
				form.submit()
			}, 500)
		}
	})
}