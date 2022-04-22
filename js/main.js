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

document.querySelector(".feedback__contacts").addEventListener("click", feedbackContacts);
function feedbackContacts() {
	let feedbackBtn = document.querySelector(".feedback__form");
	feedbackBtn.classList.toggle("feedback__form_active");
	let contactsBtn = document.querySelector(".feedback__contacts");
	contactsBtn.classList.toggle("feedback__contacts_active");
	let markBtn = document.querySelector(".feedback__mark");
	markBtn.classList.toggle("feedback__mark_active");
}


const swiper = new Swiper('.portfolio__slider', {
	loop: true,
	effect: 'fade',
	spaceBetween: 30,
	pagination: {
		el: '.portfolio__bullets',
		clickable: true,
		slideClass: 'portfolio__slide',
		bulletClass: 'portfolio__bullet',
		bulletActiveClass: 'portfolio__bullet-active',
	},
});




// document.querySelectorAll(".intro-btn").addEventListener("click", introContacts);
// function introContacts() {
// 	let introBtn = document.querySelector(".intro-btn__item");
// 	introBtn.classList.toggle("intro-btn__item_active");
// }


// document.querySelector(".tile").addEventListener("click", tile);
// function tile() {
// 	this.document.querySelector(".burger");
// 	burger.classList.toggle("burger__cross");
// 	let menu = document.querySelector(".menu");
// 	menu.classList.toggle("menu__active");
// }