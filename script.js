window.onload = function () {
	initLiteraryMutilator();
};

function initLiteraryMutilator() {
	let form = document.getElementById("red");

	form.addEventListener("mouseover", (event) => {
		handleItemForm(event, form);
	});
}

