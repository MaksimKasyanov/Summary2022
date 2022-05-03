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
	let burger = document.querySelector(".svg-path");
	burger.classList.toggle("svg-path_active");
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

document.querySelector(".feedback__btn-contacts").addEventListener("click", getContscts);
function getContscts() {
	let getContscts = document.querySelector(".feedback__contacts-line");
	getContscts.classList.toggle("feedback__contacts-line_active");
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
const swiperCaseOne = new Swiper('.case-one__slider', {
	effect: 'slide',
	spaceBetween: 0,
	navigation: {
		nextEl: '.case-one__next',
		prevEl: '.case-one__prev',
	 },
});

const swiperCaseTwo = new Swiper('.case-two__slider', {

	effect: 'slide',
	spaceBetween: 0,
	navigation: {
		nextEl: '.case-two__next',
		prevEl: '.case-two__prev',
	 },
});
const swiperCaseThree = new Swiper('.case-three__slider', {

	effect: 'slide',
	spaceBetween: 0,
	navigation: {
		nextEl: '.case-three__next',
		prevEl: '.case-three__prev',
	 },
});


document.querySelector(".skill__scss").addEventListener("click", skillScss);
function skillScss() {
	let skillScss = document.querySelector(".skill__container");
	skillScss.classList.toggle("skill__container_scss");
}

document.querySelector(".skill__gulp").addEventListener("click", skillGulp);
function skillGulp() {
	let skillGulp = document.querySelector(".skill__container");
	skillGulp.classList.toggle("skill__container_gulp");
}

document.querySelector(".skill__git").addEventListener("click", skillGit);
function skillGit() {
	let skillGulp = document.querySelector(".skill__container");
	skillGulp.classList.toggle("skill__container_git");
}

document.querySelector(".skill__cwars").addEventListener("click", skillCwars);
function skillCwars() {
	let skillCwars = document.querySelector(".skill__container");
	skillCwars.classList.toggle("skill__container_cwars");
}

document.querySelector(".skill__js").addEventListener("click", skillJs);
function skillJs() {
	let skillJs = document.querySelector(".skill__container");
	skillJs.classList.toggle("skill__container_js");
}

document.querySelector(".skill__node").addEventListener("click", skillNode);
function skillNode() {
	let skillNode = document.querySelector(".skill__container");
	skillNode.classList.toggle("skill__container_node");
}

