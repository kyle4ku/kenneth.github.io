const dock = document.querySelector(".dock");
const icon = document.querySelector(".icon");

const link = document.querySelectorAll("a");
icon.addEventListener("click", () => {
	dock.classList.toggle("dock-active");
	icon.classList.toggle("icon-hover");
	icon.classList.toggle("icon-active");
	document.body.classList.toggle("y-body");
});
link.forEach((item) => {
	item.addEventListener("click", (e) => {
		dock.classList.toggle("dock-active");
		icon.classList.toggle("icon-hover");
		icon.classList.toggle("icon-active");
		document.body.classList.toggle("y-body");
	});
});
