const someDiv = document.querySelector('#someDiv');
const counterButton = document.querySelector('#counter');
const changeBackgroundColorButton = document.querySelector('#changeBackgroundColor');
const increaseFontSizeButton = document.querySelector('#increaseFontSize');
const decreaseFontSizeButton = document.querySelector('#decreaseFontSize');

let index1 = 0;
let index2 = 0;
let fontSize = 9;

increaseFontSizeButton.addEventListener ('click', function () {
	if (fontSize === 32) {
		return;
	} else {
		fontSize++;
		someDiv.style.fontSize = fontSize + 'px';
	}
});

decreaseFontSizeButton.addEventListener ('click', function () {
	if (fontSize === 9) {
		return;
	} else {
		fontSize--;
		someDiv.style.fontSize = fontSize + 'px';
	}
});

counterButton.addEventListener ('click', function (){
	someDiv.innerHTML = counter();
});

changeBackgroundColorButton.addEventListener ('click', function () {
	if (index2 === 2) {
		index2 = 0;
	} else {
		index2++;
	}
	let background = '';
	switch (index2) {
		case (0):
			background = '#fff';
			break;
		case (1):
			background = '#ff0';
			break;
		case (2):
			background = '#FFA500';
			break;
	}
	someDiv.style.backgroundColor = background;
});

const counter = function () {
	return ++index1;
};