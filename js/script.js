const startButton = document.getElementById("start-button");
const startMenu = document.getElementById("start-menu");

const open = () => {
	startMenu.style.display = "block";
	console.log("opened");
};

const close = () => {
	startMenu.style.display = "none";
};

startButton.addEventListener("click", open);
// startButton.addEventListener("blur", close);
