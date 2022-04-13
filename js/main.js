document.querySelector(".burger").addEventListener("click", menu);
function menu() {
	let burger = document.querySelector(".burger");
	burger.classList.toggle("burger__cross");
	let menu = document.querySelector(".menu");
	menu.classList.toggle("menu__active");
}

document.querySelector(".theme-btn").addEventListener("click", themeSwitcer);
function themeSwitcer() {
	let theme = document.querySelector(".theme-btn");
	theme.classList.toggle("theme-btn__active");
}



VANTA.FOG({
	el: "#portfolio",
	highlightColor: 0x0,
	midtoneColor: 0x21fd7e,
	lowlightColor: 0x0,
	baseColor: 0x0,
	blurFactor: 0.29,
	speed: 1.50
});

VANTA.FOG({
	el: "#feedback",
	highlightColor: 0x0,
	midtoneColor: 0x21fd7e,
	lowlightColor: 0x0,
	baseColor: 0x0,
	blurFactor: 0.29,
	speed: 1.50
});

