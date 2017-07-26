class Person{
	constructor(name, friends){
		this.name = name
		this.friends = friends || []
	}

	getFriends(){
		// const self = this;//_this
		// self.friends.forEach(function (friend){
		// 	console.log(`Hi, my name is ${self.name} and I am a friend of ${friend} `)
		// })
		
		// this.friends.forEach(function (friend){
		// 	console.log(`Hi, my name is ${this.name} and I am a friend of ${friend} `)
		// }.bind(this))

		this.friends.forEach((friend) => {
			console.log(`Hi, my name is ${this.name} and I am a friend of ${friend} `)
		})
	}
}

const mau = new Person("Mau", ["Ola", "ke", "ase"])