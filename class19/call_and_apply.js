const mau = {
	name: 'Mau',
	lastName: 'Hernández'
}

function sayHello(times, uppercase){
	let str = `Hello ${this.name} ${this.lastName}`
	str = uppercase ? str.toUpperCase() : str
	for(let i=0; i<times; i++){
		console.log(str)
	}
}

const params = [3, true]
sayHello.call(mau, ...params)
sayHello.apply(mau, params)