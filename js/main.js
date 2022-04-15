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

	let fog = document.querySelector(".portfolio");
	fog.classList.toggle("fog__dark");
	fog.classList.toggle("fog__light");
}


