function platzom(str){
	let translation = str
	//Si la palabra original es un palíndromo, ninguna regla cuenta y se devuelve la misma palabra intercalando mayúsculas y minúsculas
	if(str == reverse(str)){
		return minMay(str)
	}

	//Si la palabra termina en "ar", se le quitan esos dos caracteres
	if(str.toLowerCase().endsWith('ar')){
		translation = str.slice(0, -2)
	}

	//Si la palabra inicia con "Z", se le añade "pe" al final
	if(str.toLowerCase().startsWith('z')){
		translation += "pe"
	}

	//Si la palabra traducida tiene 10 o más letras, separar por la mitad y unir mediante un guión
	const length = translation.length
	if(length >= 10){
		const firstHalf = translation.slice(0, Math.round(length / 2))
		const lastHalf = translation.slice(Math.round(length / 2))
		translation = `${firstHalf}-${lastHalf}`
	}

	return translation
}

const reverse = (str) => str.split('').reverse().join('')
const minMay = (str) => str.split('').map(valueKey).join('')
const valueKey = (value, key) => key % 2==0 ? value.toUpperCase() : value.toLowerCase()

console.log(platzom("Programar")) //Program
console.log(platzom("Zorro")) //Zorrope
console.log(platzom("Zarpar")) //Zarppe
console.log(platzom("abecedario")) //abece-dario
console.log(platzom("sometemos")) //SoMeTeMoS