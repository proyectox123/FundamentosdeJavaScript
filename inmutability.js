const birthday = person => {
	const clone = Object.assign({}, person)
	clone.age++
	return clone
}

let mau = {name: 'Mau', age: 26}
const mauOther = birthday(mau)

//https://facebook.github.io/immutable-js/