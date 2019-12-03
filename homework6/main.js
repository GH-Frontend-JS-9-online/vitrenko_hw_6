"use strict"


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 42]
let sum_deafult = 0;
let minNumber;
let maxNumber;

function sum(a) {
	for (i = 0; i <= a.length-1; i++) {
		sum_deafult = sum_deafult + a[i];
	}
}

function pseudomin(a) {
	minNumber = a[0];

	for (i = 0; i <= a.length-1; i++) {
		if (a[i] > minNumber) {
			minNumber = a[i];
		}
	}
}

function pseudomax(a) {
	maxNumber = a[0];

	for (i = 0; i <= a.length-1; i++) {
		if (a[i] < maxNumber) {
			maxNumber = a[i]
		}
	}
}

let max1 = Math.max(...array);
let min1 = Math.min(...array);

function replace(a) {
	for (i = 0; i <= a.length-1; i++) {
		if (a[i] % 3 === 0 && a[i] % 7 === 0) {
			a[i] = `foobar`
		}

		else if (a[i] % 3 == 0) {
			a[i] = `foo`;
		}

		else if (a[i] % 7 == 0) {
			a[i] = `bar`;
		}
	}

	alert(a);
}

function correspond (str1, str2) {
	str1 = prompt(`String 1`);
	str2 = prompt(`String 2`);

	let arr1 = str1.split(``);
	let arr2 = str2.split(``);
	let arr3 = [];
	let result;

	for (i = 0; i <= arr1.length-1; i++) {
		for (j = 0; j <= arr2.length-1; j++) {
			if (arr1[i] == arr2[j]) {
				arr3.push(arr1[i]);
			}
		}
	}

	result = arr3.length/(arr1.length + arr2.length)*100;
	result = result.toFixed(4);

	alert(`${result}` + `%`);
}	

function returncollback(new_function) {
	new_function = function(arg, callback) {
		//код функции
	}
}	