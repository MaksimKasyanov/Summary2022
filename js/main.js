document.querySelector(".burger").addEventListener("click", menu);
function menu() {
	let burger = document.querySelector(".burger");
	burger.classList.toggle("burger__cross");
	let menu = document.querySelector(".menu");
	menu.classList.toggle("menu__active");
}

document.querySelector(".theme-btn").addEventListener("click", themeSwitcer);
function themeSwitcer() {
	let themeBtn = document.querySelector(".theme-btn");
	themeBtn.classList.toggle("theme-btn__active");
	let theme = document.querySelector(".theme");
	theme.classList.toggle("theme__dark");
	theme.classList.toggle("theme__light");
}

document.querySelector(".feedback__btn-contacts").addEventListener("click", feedbackContacts);
function feedbackContacts() {
	let feedbackBtn = document.querySelector(".feedback__form");
	feedbackBtn.classList.toggle("feedback__form_active");
	let contactsBtn = document.querySelector(".feedback__btn-contacts");
	contactsBtn.classList.toggle("feedback__btn-contacts_active");
	let markBtn = document.querySelector(".feedback__mark");
	markBtn.classList.toggle("feedback__mark_active");
}

document.querySelector(".menu__list-customer").addEventListener("click", formCustomer);
function formCustomer() {
	let customerForm = document.querySelector(".form__customer");
	customerForm.classList.toggle("form__customer_active");
}

document.querySelector(".form-close__customer").addEventListener("click", closeFormCustomer);
function closeFormCustomer() {
	let customerForm = document.querySelector(".form__customer");
	customerForm.classList.remove("form__customer_active");
}

document.querySelector(".menu__list-employer").addEventListener("click", formEmployer);
function formEmployer() {
	let employerForm = document.querySelector(".form__employer");
	employerForm.classList.toggle("form__employer_active");
}

document.querySelector(".form-close__employer").addEventListener("click", closeFormEmployer);
function closeFormEmployer() {
	let feedbackBtn = document.querySelector(".form__employer");
	feedbackBtn.classList.remove("form__employer_active");
}

document.querySelector(".lang-btn").addEventListener("click", switchLang);
function switchLang() {
	let switchLangEn = document.querySelector(".lang-btn");
	switchLangEn.classList.toggle("lang-btn_active");
}

const swiper = new Swiper('.portfolio__slider', {
	loop: true,
	effect: 'fade',
	spaceBetween: 30,
	allowTouchMove: false,
	pagination: {
		el: '.portfolio__bullets',
		clickable: true,
		slideClass: 'portfolio__slide',
		bulletClass: 'portfolio__bullet',
		bulletActiveClass: 'portfolio__bullet-active',
	},
});

