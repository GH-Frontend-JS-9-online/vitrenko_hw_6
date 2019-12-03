let num1 = Number(document.getElementById(num1));
let num2 = Number(document.getElementById(num2));
let result;

function plus() {
	result = num1 + num2;
}

function minus() {
	result = num1 - num2;
}

function multiplication() {
	result = num1*num2;
}

function division() {
	result = num1/num2;
}

document.getElementsByClassName(result).innerHTML(result);