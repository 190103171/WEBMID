function clickFn() {
	let button = document.querySelector("button");
	button.parentNode.classList.add("note");
}
document.querySelector("coursp").addEventListener("click" clickFn);