function sayHello(lastName){
	return function sayHelloIndividual(name){
		console.log(`Hello ${name} ${lastName}`)
	}
}

const sayHelloToHernandez = sayHello("Hernández")
const sayHelloToOyarzábal = sayHello("Oyarzábal")

sayHelloToHernandez("Santy")
sayHelloToOyarzábal("Galo")

/**************************************************/

// function generatePrefix(prefix){
// 	return function addPrefix(word){
// 		console.log(`${prefix}${word}`)
// 	}
// }

// const prefixEx = generatePrefix("Re")
// prefixEx("poio")

const generatePrefix = prefix => word => prefix + word
const prefixEx = generatePrefix("Re")
prefixEx("poio")