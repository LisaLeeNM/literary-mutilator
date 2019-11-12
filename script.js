window.onload = function () {
	initLiteraryMutilator();
};

function initLiteraryMutilator() {
	let paragraph1 = document.getElementById("paragraph1");
	paragraph1.addEventListener("mouseover", (event) => {
		handleParagraph1(event, paragraph1);
	})
}
// Colors paragraph red
function handleParagraph1(event, paragraphRef) {
	if(event.preventDefault) {
		event.preventDefault();
	}
	let

}
