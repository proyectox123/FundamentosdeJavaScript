'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = platzom;
function platzom(str) {
	var translation = str;
	//Si la palabra original es un palíndromo, ninguna regla cuenta y se devuelve la misma palabra intercalando mayúsculas y minúsculas
	if (str == reverse(str)) {
		return minMay(str);
	}

	//Si la palabra termina en "ar", se le quitan esos dos caracteres
	if (str.toLowerCase().endsWith('ar')) {
		translation = str.slice(0, -2);
	}

	//Si la palabra inicia con "Z", se le añade "pe" al final
	if (str.toLowerCase().startsWith('z')) {
		translation += "pe";
	}

	//Si la palabra traducida tiene 10 o más letras, separar por la mitad y unir mediante un guión
	var length = translation.length;
	if (length >= 10) {
		var firstHalf = translation.slice(0, Math.round(length / 2));
		var lastHalf = translation.slice(Math.round(length / 2));
		translation = firstHalf + '-' + lastHalf;
	}

	return translation;
}

var reverse = function reverse(str) {
	return str.split('').reverse().join('');
};
var minMay = function minMay(str) {
	return str.split('').map(valueKey).join('');
};
var valueKey = function valueKey(value, key) {
	return key % 2 == 0 ? value.toUpperCase() : value.toLowerCase();
};