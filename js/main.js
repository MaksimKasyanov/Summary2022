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
document.querySelector(".lang-btn").addEventListener("click", switchLang);
function switchLang() {
	let switchLangEn = document.querySelector(".lang-btn");
	switchLangEn.classList.toggle("lang-btn_active");
}
document.querySelector(".feedback__btn-contacts").addEventListener("click", getContscts);
function getContscts() {
	let getContscts1 = document.querySelector(".feedback__contacts-line1");
	getContscts1.classList.toggle("feedback__contacts-line_active");
	let getContscts2 = document.querySelector(".feedback__contacts-line2");
	getContscts2.classList.toggle("feedback__contacts-line_active");
	let getContscts3 = document.querySelector(".feedback__contacts-line3");
	getContscts3.classList.toggle("feedback__contacts-line_active");
	let getContscts4 = document.querySelector(".feedback__contacts-line4");
	getContscts4.classList.toggle("feedback__contacts-line_active");
	let getContscts5 = document.querySelector(".feedback__contacts-line5");
	getContscts5.classList.toggle("feedback__contacts-line_active");
	let getContscts6 = document.querySelector(".feedback__contacts-line6");
	getContscts6.classList.toggle("feedback__contacts-line_active");
}

const swiper = new Swiper('.portfolio__slider', {
	loop: false,
	effect: 'fade',
	spaceBetween: 30,
	allowTouchMove: false,
	pagination: {
		el: '.portfolio__bullets',
		clickable: true,
		bulletElement: 'portfolio__bullet',
		slideClass: 'portfolio__slide',
		bulletClass: 'portfolio__bullet',
		bulletActiveClass: 'portfolio__bullet-active',
	},
});
const swiperCaseOne = new Swiper('.case-one__slider', {
	effect: 'slide',
	spaceBetween: 0,
	navigation: {
		disabledClass: 'portfolio__nav-disabled',
		nextEl: '.case-one__next',
		prevEl: '.case-one__prev',
	},
});
const swiperCaseTwo = new Swiper('.case-two__slider', {

	effect: 'slide',
	spaceBetween: 0,
	navigation: {
		disabledClass: 'portfolio__nav-disabled',
		nextEl: '.case-two__next',
		prevEl: '.case-two__prev',
	},
});
const swiperCaseThree = new Swiper('.case-three__slider', {
	effect: 'slide',
	spaceBetween: 0,
	navigation: {
		disabledClass: 'portfolio__nav-disabled',
		nextEl: '.case-three__next',
		prevEl: '.case-three__prev',
	},
});
const swiperForm = new Swiper('.form__both-slider', {
	effect: 'coverflow',
	// loop: true,
	spaceBetween: 0,
	navigation: {
		prevEl: '.form__both-prev',
		nextEl: '.form__both-next',
		disabledClass: 'form__both-disabled',
	},
});




document.querySelector(".skill__scss").addEventListener("click", skillScss);
function skillScss() {
	let skillScss = document.querySelector(".skill__container");
	skillScss.classList.toggle("skill__container_scss");

}
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


// ! Form
document.querySelector(".menu__list-employer").addEventListener("click", employerForm);
function employerForm() {

	let formEmployer = document.querySelector(".form__both");
	formEmployer.classList.add("form__both_active");
	let formSwitchNone = document.querySelector(".form__both-buttons");
	formSwitchNone.classList.add("form__both-buttons_none");
}

document.querySelector(".menu__list-customer").addEventListener("click", customerForm);
function customerForm() {

	let formEmployer = document.querySelector(".form__both");
	formEmployer.classList.add("form__both_active");

	let formSwitchNone = document.querySelector(".form__both-buttons");
	formSwitchNone.classList.add("form__both-buttons_none");
}

document.querySelector(".feedback__form").addEventListener("click", fillForm);
function fillForm() {
	let formActive = document.querySelector(".form__both");
	formActive.classList.add("form__both_active");

}

document.querySelector(".form-close__both").addEventListener("click", removeFillForm);
function removeFillForm() {
	let switchLangEn = document.querySelector(".form__both");
	switchLangEn.classList.remove("form__both_active");
}
document.querySelector(".feedback__mark").addEventListener("click", feedbackMark);
function feedbackMark() {
	let feedbackMark = document.querySelector(".form__mark-popup");
	feedbackMark.classList.add("form__mark-popup_active");
}
document.querySelector(".form-close__mark").addEventListener("click", removeMarkForm);
function removeMarkForm() {
	let feedbackMark = document.querySelector(".form__mark-popup");
	feedbackMark.classList.remove("form__mark-popup_active");
}





// ! Form  Gratitude

const userName = document.querySelector(".gratitude__data"); // ! Определение родителя
let text = document.createElement('span'); // ! Создание элемента
text.classList.add('gratitude__text'); // ! Присвоение класса

function gratitudePopup(){
	let formSwitchNone = document.querySelector(".form__both-buttons");
	formSwitchNone.classList.remove("form__both-buttons_none");
	let gratitudeActive = document.querySelector(".gratitude");
	gratitudeActive.classList.add("gratitude_active");
	setTimeout(() => {
		const gratitudeDescription = document.querySelector(".gratitude__text");
		gratitudeDescription.remove();
	}, 5000);
	setTimeout(() => {
		const gratitudeRemove = document.querySelector(".gratitude");
		gratitudeRemove.classList.remove("gratitude_active");
	}, 4000);
}

function gratitudeDataCustomer(){
	let data = document.getElementById("gratitude__value-customer").value;
	text.innerHTML = `\u00a0${data},\u00a0`; // ! Запись данных
	userName.prepend(text); // ! Вставка элемента
}
function gratitudeDataEmployer(){
	let data = document.getElementById("gratitude__value-employer").value;
	text.innerHTML = `\u00a0${data},\u00a0`; // ! Запись данных
	userName.prepend(text); // ! Вставка элемента
}
document.querySelector(".form__submit-customer").addEventListener("click", gratitudeCustomer);
function gratitudeCustomer() {
	let formSwitchFlex = document.querySelector(".form__both-buttons");
	formSwitchFlex.classList.remove("form__both-buttons_none");
	gratitudeDataCustomer();
	gratitudePopup();
}
document.querySelector(".form__submit-employer").addEventListener("click", gratitudeEmployer);
function gratitudeEmployer() {
	let formSwitchFlex = document.querySelector(".form__both-buttons");
	formSwitchFlex.classList.remove("form__both-buttons_none");
	gratitudeDataEmployer();
	gratitudePopup();
}





