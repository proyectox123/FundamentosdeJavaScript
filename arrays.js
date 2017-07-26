// function sum(...numbers){
// 	return numbers.reduce(function(acum, number){
// 		acum += number
// 		return acum
// 	}, 0)
// }

// sum(4, 8, 12, 8954, 7)

const sum = (...numbers) => numbers.reduce((acum, number) => acum += number, 0)
sum(4, 8, 12, 8954, 7)

const doubleF = (...numbers) => numbers.map(number => number * 2)
doubleF(2, 6, 12)

const pairs = (...numbers) => numbers.filter(number => number % 2 == 0)
pairs(2, 5, 8, 13)