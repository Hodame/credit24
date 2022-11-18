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

	form.addEventListener('submit', (formSend))

	async function formSend(e) {
		e.preventDefault()
	
		let error = formValidate(form) 
		const errorAlert = document.querySelector('.popup-application__error')

		if (error === 0) {
			errorAlert.classList.remove("_error")
			window.location.href = "../statement.html"
			// Сюда нужно записать логику для отправки данных форму с помощью AJAX.
		} else {
			errorAlert.classList.add("_error")
		}
	}
	
	function formValidate(form) {
		let error = 0
		let formReq = document.querySelectorAll('._req')
		for (i = 0; i < formReq.length; i++) {
			const input = formReq[i]
			const selector = document.querySelector('_selector')
			formRemoveError(input) 
	
			if (input.getAttribute('type') === "checkbox" && input.checked === false) {
				formAddError(input)
				error++
			}
			else if (input.classList.contains('_code')) {
				if (codeText(input)) {
					formAddError(input)
					error++	
				}
			}
			else if (input.classList.contains('_selector')) {
				if (input.innerHTML === '') {
					formAddError(input)
					error++	
				}
			} else {
				if (input.value === '') {
					formAddError(input)
					error++
				}
			}
		}
		return error
	}
	
	function formAddError(input) {
		input.parentElement.classList.add('_error')
		input.classList.add('_error')	
	}
	
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error')
		input.classList.remove('_error')	
		input.parentElement.classList.add('_ok')
		input.classList.add('_ok')	
	}

	function codeText(input) {
		return !/\d{11}/.test(input.value)
	}

	scrollToSection()
	acordion()
	burger()
	calculator()
	checkBoxFrom() 
	popupApplication() 
	popupRadio()
	popupEula()
})

var isBreakPoint = function (bp) {
    var bps = [319, 425],
        w = $(window).width(),
        min, max
    for (var i = 0, l = bps.length; i < l; i++) {
      if (bps[i] === bp) {
        min = bps[i-1] || 0
        max = bps[i]
        break
      }
    }
    return w > min && w <= max
}

function calculator() {
	const calcDate = document.querySelector('.calculator__date')
	const calcFakeElem = document.querySelector('.calculator__fake-elem')
	const calcSelector = document.querySelector('.calculator__date-selector')
	const calcOptions = document.querySelector('.calculator__options')
	const calcOption = document.querySelectorAll('.calculator__option label')
	
	calcFakeElem.addEventListener('click', (e) => {
		calcDate.classList.toggle('open')
		if (calcDate.classList.contains("open")) {
			calcDate.style.height = calcDate.scrollHeight + 4 + "px"
		} else {
			calcDate.style.height = 50 + 'px'
		}
	})
	
	calcOption.forEach(elem => {
		elem.addEventListener('click', (e) => {
			calcSelector.innerHTML = elem.innerHTML
			calcDate.style.height = 50 + 'px'
			calcDate.classList.remove('open')
		})
	});
	
}

function threeItems() {
	const acordionItem = document.querySelectorAll('.faq__item')
	let itemShow = 3
	if (acordionItem.length >= itemShow) {
		for (i = itemShow; i < acordionItem.length; i++) {
			acordionItem[i].classList.add("hide")
		}
	}
}

function showHide() {
	const moreBtn = document.querySelector(".faq__more")
	const lessBtn = document.querySelector(".faq__less")
	const acordionItem = document.querySelectorAll('.faq__item')

	moreBtn.addEventListener("click", (e) => {
		acordionItem.forEach(e =>{
			if (e.classList.contains('hide')) {
				e.classList.remove('hide')
			} 
		})
		lessBtn.style.display = "block"
		moreBtn.style.display = "none"
	})

	lessBtn.addEventListener('click', (e) => {
		threeItems()
		moreBtn.style.display = "block"
		lessBtn.style.display = "none"
	})
}

function scrollToSection() {
	const buttonsDesktop = document.querySelectorAll('.header__list li')
	const buttonsMobile = document.querySelectorAll('.header__list-burger li')
	const buttonsFooter = document.querySelectorAll('.footer__list li')
	const wrapper = document.querySelector('.wrapper')
	const content = document.querySelector('.content')
	const footer = document.querySelector('.footer')
	const headerHeight = wrapper.scrollHeight - content.scrollHeight - footer.scrollHeight
	
	const partnersSection = document.querySelector('.partners').scrollHeight
	const workSection = document.querySelector('.work').scrollHeight
	const whyWeSection = document.querySelector('.whywe').scrollHeight
	const drawSection = document.querySelector('.draw').scrollHeight
	const reviewsSection = document.querySelector('.reviews').scrollHeight
	const clientsSection = document.querySelector('.clients').scrollHeight
	const termsSection = document.querySelector('.terms').scrollHeight
	const faqSection = document.querySelector('.faq').scrollHeight
	section1() 
	function section1() {
		buttonsDesktop[0].addEventListener('click', (e) => {
			window.scrollTo({
				top: headerHeight - partnersSection ,
				left: 0,
				behavior: 'smooth'
			  });
		})
		buttonsFooter[0].addEventListener('click', (e) => {
			window.scrollTo({
				top: headerHeight - partnersSection ,
				left: 0,
				behavior: 'smooth'
			  });
		})
		buttonsMobile[0].addEventListener('click', (e) => {
			document.querySelector('.header__burger-menu').classList.remove('open')
			document.querySelector('.header__burger-toggle').classList.remove('open')
			document.querySelector('body').classList.remove('lock')
			window.scrollTo({
				top: headerHeight - partnersSection ,
				left: 0,
				behavior: 'smooth'
			  });
		})
	}
	section2()
	function section2() {
		buttonsDesktop[1].addEventListener('click', (e) => {
			window.scrollTo({
				top: headerHeight - partnersSection + workSection,
				left: 0,
				behavior: 'smooth'
			  });
		})
		buttonsFooter[1].addEventListener('click', (e) => {
			window.scrollTo({
				top: headerHeight - partnersSection + workSection,
				left: 0,
				behavior: 'smooth'
			  });
		})
		buttonsMobile[1].addEventListener('click', (e) => {
			document.querySelector('.header__burger-menu').classList.remove('open')
			document.querySelector('.header__burger-toggle').classList.remove('open')
			document.querySelector('body').classList.remove('lock')
			window.scrollTo({
				top: headerHeight + partnersSection,
				left: 0,
				behavior: 'smooth'
			  });
		})
	}
	section3()
	function section3() {
		buttonsDesktop[2].addEventListener('click', (e) => {
			window.scrollTo({
				top: headerHeight - partnersSection + workSection + whyWeSection + drawSection + reviewsSection,
				left: 0,
				behavior: 'smooth'
			  });
		})
		buttonsFooter[2].addEventListener('click', (e) => {
			window.scrollTo({
				top: headerHeight - partnersSection + workSection + whyWeSection + drawSection + reviewsSection,
				left: 0,
				behavior: 'smooth'
			  });
		})
		buttonsMobile[2].addEventListener('click', (e) => {
			document.querySelector('.header__burger-menu').classList.remove('open')
			document.querySelector('.header__burger-toggle').classList.remove('open')
			document.querySelector('body').classList.remove('lock')
			console.log (headerHeight - partnersSection + workSection - workSection)
			window.scrollTo({
				top: headerHeight + partnersSection + workSection + whyWeSection + drawSection ,
				left: 0,
				behavior: 'smooth'
			  });
		})
	}
	section4()
	function section4() {
		buttonsDesktop[3].addEventListener('click', (e) => {
			console.log (headerHeight - partnersSection + workSection + whyWeSection + drawSection + reviewsSection)
			window.scrollTo({
				top: headerHeight + partnersSection + workSection + whyWeSection + drawSection + reviewsSection + clientsSection + termsSection,
				left: 0,
				behavior: 'smooth'
			  });
		})
		buttonsFooter[3].addEventListener('click', (e) => {
			console.log (headerHeight - partnersSection + workSection + whyWeSection + drawSection + reviewsSection)
			window.scrollTo({
				top: headerHeight + partnersSection + workSection + whyWeSection + drawSection + reviewsSection + clientsSection + (termsSection / 1.5),
				left: 0,
				behavior: 'smooth'
			  });
		})
		buttonsMobile[3].addEventListener('click', (e) => {
			document.querySelector('.header__burger-menu').classList.remove('open')
			document.querySelector('.header__burger-toggle').classList.remove('open')
			document.querySelector('body').classList.remove('lock')
			window.scrollTo({
				top: headerHeight + partnersSection + workSection + whyWeSection + drawSection + reviewsSection + clientsSection + termsSection,
				left: 0,
				behavior: 'smooth'
			  });
		})
	}
	section5()
	function section5() {
		buttonsDesktop[4].addEventListener('click', (e) => {
			window.scrollTo({
				top: headerHeight + partnersSection + workSection + whyWeSection + drawSection + reviewsSection + clientsSection ,
				left: 0,
				behavior: 'smooth'
			  });
		})
		buttonsFooter[4].addEventListener('click', (e) => {
			window.scrollTo({
				top: headerHeight + partnersSection + workSection + whyWeSection + drawSection + reviewsSection + clientsSection,
				left: 0,
				behavior: 'smooth'
			  });
		})
		buttonsMobile[4].addEventListener('click', (e) => {
			document.querySelector('.header__burger-menu').classList.remove('open')
			document.querySelector('.header__burger-toggle').classList.remove('open')
			document.querySelector('body').classList.remove('lock')
			window.scrollTo({
				top: headerHeight + partnersSection + workSection + whyWeSection + drawSection + reviewsSection + clientsSection ,
				left: 0,
				behavior: 'smooth'
			  });
		})
	}
}

function acordion() {
	const acordionItem = document.querySelectorAll('.faq__item')
	let acordionPadding = 35

	if (isBreakPoint(425)) {
		acordionPadding = 20
		threeItems()
		showHide()
	}

	acordionItem.forEach(element => {
		element.style.height = element.querySelector('.faq__question').scrollHeight + 22 + 'px'
		element.querySelector('p').style.fontWeight = 400
				if (isBreakPoint(425)) {
					element.style.height = document.querySelector('.faq__question').scrollHeight + 22 + 'px'
				}
	});

	acordionItem.forEach(elem => {
		const acordionBtn = elem.querySelector('.faq__question')
		const acordionAnswer = elem.querySelector('.faq__answer')
		acordionBtn.addEventListener('click', (e) => {
			let borderSize = 22
			if (!elem.classList.contains('open')) {
				acordionItem.forEach(elem2 => {
					const acordionBtn = elem2.querySelector('.faq__question')
					const acordionAnswer = elem2.querySelector('.faq__answer')			
					if (elem2.classList.contains('open')) {
						elem2.querySelector('p').style.fontWeight = 400
						elem2.classList.remove('open')
						acordionAnswer.classList.remove('open')
						acordionBtn.classList.remove('open')		
						elem2.style.height = acordionBtn.scrollHeight - 8 + 'px'
						if (isBreakPoint(425)) {
							elem2.style.height = acordionBtn.scrollHeight + 6 + 'px'
						}	
					}
				});
				elem.classList.add('open')
				acordionAnswer.classList.add('open')
				acordionBtn.classList.add('open')
				elem.querySelector('p').style.fontWeight = 600	
				elem.style.height = (acordionBtn.scrollHeight + acordionPadding) + acordionAnswer.scrollHeight + borderSize + acordionPadding + 'px'
			} else {
				elem.querySelector('p').style.fontWeight = 400
				elem.classList.remove('open')
				acordionAnswer.classList.remove('open')
				acordionBtn.classList.remove('open')	
				elem.style.height = acordionBtn.scrollHeight - 8 + 'px'
				if (isBreakPoint(425)) {
					elem.style.height = acordionBtn.scrollHeight + 6 + 'px'
				}
			}
		})
	});
	
}

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

function checkBoxFrom() {
	const input = document.querySelector('.popup-application__checkbox input')
	const checkBox = document.querySelector('.popup-application__checkbox')

	input.addEventListener('click', (e) => {
		checkBox.classList.toggle('checked')
	})
}

function popupRadio() {
	const fakeGeo = document.querySelector('.popup-application__geo-fake')
	const geo = document.querySelector('.popup-application__geo')
	const selector = document.querySelector('.popup-application__area-selector')
	const options = document.querySelectorAll('.popup-application__options label')

	geo.style.height = 50 + 'px'
	
	fakeGeo.addEventListener('click', (e) => {
		geo.classList.toggle('open')
		fakeGeo.classList.toggle('open')
		if (geo.classList.contains("open")) {
			geo.style.height = geo.scrollHeight + 4 + "px"
		} else {
			geo.style.height = 49 + 'px'
		}
	})
	
	options.forEach(elem => {
		elem.addEventListener('click', (e) => {
			selector.innerHTML = elem.innerHTML
			geo.style.height = 50 + 'px'
			geo.classList.remove('open')
			fakeGeo.classList.remove('open')
		})
	});
}

function popupEula() {
	const openBtn = document.querySelector('.popup-application__checkbox p span')
	const popup = document.querySelector('.popup-eula')
	const bg = document.querySelector('.popup-eula__bg')
	const body = document.querySelector('body')
	const closeBtn = document.querySelector('.popup-eula__close-btn img')

	closeBtn.addEventListener('click', (e) => {
		popup.classList.remove('popup-open')
	})

	bg.addEventListener('click', (e) => {
		popup.classList.remove('popup-open')
	})
	openBtn.addEventListener('click', (e) => {
		body.classList.add('lock')
		popup.classList.add('popup-open')
	});
}

function popupApplication() {
	const buttons = document.querySelectorAll('.open-popup')
	const popupApplication = document.querySelector('.popup-application')
	const closeBtn = document.querySelector('.popup-application__close-btn img')
	const bg = document.querySelector('.popup-application__popup-bg')
	const body = document.querySelector('body')

	closeBtn.addEventListener('click', (e) => {
		popupApplication.classList.remove('popup-open')
		body.classList.remove('lock')
	})
	bg.addEventListener('click', (e) => {
		popupApplication.classList.remove('popup-open')
		body.classList.remove('lock')
	})
	buttons.forEach(element => {
		element.addEventListener('click', (e) => {
			body.classList.add('lock')
			popupApplication.classList.add('popup-open')
		})
	});
}




const swiper = new Swiper('.partners__slider', {
	slidesPerView: 3,
	spaceBetween: 15,
	navigation: {
	  nextEl: '.partners__button-next',
	  prevEl: '.partners__button-prev',
	},
	breakpoints: {
		1380: {
			spaceBetween: 30,
			slidesPerView: 6,
		},
		992: {
			spaceBetween: 15,
			slidesPerView: 4,
		},
		550: {
			slidesPerView: 3,
		},
		425: {
			slidesPerView: 2,
		},
		320: {
			spaceBetween: 15,
			slidesPerView: 2,
		},
	}
  });

const reviews = new Swiper('.reviews__slider', {
	slidesPerView: 1,
	spaceBetween: 30,
	navigation: {
	  nextEl: '.reviews__btn-next',
	  prevEl: '.reviews__btn-prev',
	},
	pagination: {
		el: '.swiper-pagination',
	  },
	  
	breakpoints: {
		1525: {
			slidesPerView: 3,
		},
		1140: {
			slidesPerView: 3,
		},
		992: {
			spaceBetween: 20,
			slidesPerView: 2,
		},
		900: {
			spaceBetween: 20,
			slidesPerView: 2,
		},
		650: {
			slidesPerView: 2,
		},
		319: {
			slidesPerView: 1,
		}
	},
  });

