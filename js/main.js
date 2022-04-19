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