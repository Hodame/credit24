document.addEventListener('DOMContentLoaded', () => {
	const buttonTop = document.querySelector('.footer__button-top')
	const form = document.querySelector('.popup-application__form')
	buttonTop.addEventListener('click', () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		  });		  
	})
	burger()

})

function burger() {
	const burger = document.querySelector(".header__burger-toggle")
	const burgerMenu = document.querySelector(".header__burger-menu")
	const body = document.querySelector('body')
	burger.addEventListener('click', (e) => {
		burger.classList.toggle('open')
		burgerMenu.classList.toggle("open")
		body.classList.toggle('lock')
		window.scrollTo(0, 0)
	})
}