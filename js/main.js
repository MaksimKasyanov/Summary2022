document.querySelector("button").addEventListener("click", menu);

function menu() {
	let burger = document.querySelector(".burger");
	burger.classList.toggle("burger__cross");
	let menu = document.querySelector(".menu");
	menu.classList.toggle("menu__active");
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

