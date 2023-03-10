let displayValue = '0';

function clearDisplay() {
	displayValue = '0';
	updateDisplay();
}

function deleteLast() {
	displayValue = displayValue.slice(0, -1);
	if (displayValue === '') {
		displayValue = '0';
	}
	updateDisplay();
}

function addToDisplay(char) {
	if (displayValue === '0' && char !== '.') {
		displayValue = char.toString();
	} else {
		displayValue += char.toString();
	}
	updateDisplay();
}

function calculate() {
	displayValue = eval(displayValue).toString();
	updateDisplay();
}

function updateDisplay() {
	document.getElementById('result').innerHTML = displayValue;
}
