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



VANTA.FOG({
	el: ".fog__dark",
	highlightColor: 0x0,
	midtoneColor: 0x21fd7e,
	lowlightColor: 0x0,
	baseColor: 0x0,
	blurFactor: 0.29,
	speed: 1.50
});
VANTA.FOG({
	el: ".fog__light",
	highlightColor: 0x35b924,
	midtoneColor: 0x29be29,
	lowlightColor: 0xffffff,
	baseColor: 0xffffff,
	blurFactor: 0.31,
	speed: 1.50,
	zoom: 2.70
});

VANTA.FOG({
	el: ".feedback",
	highlightColor: 0x0,
	midtoneColor: 0x21fd7e,
	lowlightColor: 0x0,
	baseColor: 0x0,
	blurFactor: 0.29,
	speed: 1.50
});

