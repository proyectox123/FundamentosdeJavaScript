// var name = "Mau"

// function hello () {
// 	var name = "Santy"
// 	console.log(`Hola ${name}`)
// }

// hello()

// function hello10Times (name) {
// 	//var i -> Hoisting
// 	for(var i=0; i<10; i++){
// 		console.log(`Hola ${name}`)
// 	}

// 	console.log(`El valor de i es ${i}`)
// }

// hello10Times("Mau")

function hello10Times (name) {
	for(let i=0; i<10; i++){
		console.log(`Hola ${name}`)
	}

	console.log(`El valor de i es ${i}`)
}

hello10Times("Mau")