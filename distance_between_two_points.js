// function Point(x, y){
// 	this.x = x
// 	this.y = y
// }

// Point.prototype.moveInX = function moveInX(x) { this.x += x },
// Point.prototype.moveInY = function moveInY(y) { this.y += y },
// Point.prototype.distance = function distance(p){
// 	const x = this.x - p.x
// 	const y = this.y - p.y

// 	return Math.sqrt(x * x + y * y)
// }

//const p1 = new Point(0, 4)
//const p2 = new Point(3, 0)

// const Point = {
// 	init: function(x, y) {
// 		this.x = x
// 		this.y = y
// 	},
// 	moveInX: function moveInX(x) { this.x += x },
// 	moveInY: function moveInY(y) { this.y += y },
// 	distance: function distance(p) {
// 		const x = this.x - p.x
// 		const y = this.y - p.y

// 		return Math.sqrt(x * x + y * y)
//  	}
// }

// const p1 = Object.create(Point)
// const p2 = Object.create(Point)
// p1.init(0, 4)
// p2.init(3, 0)

class Point {
	constructor (x, y){
		this.x = x
		this.y = y
	}

	moveInX(x) {
		this.x += x
	}

	moveInY(y) {
		this.y += y
	}

	distance(p){
		const x = this.x - p.x
		const y = this.y - p.y

		return Math.sqrt(x * x + y * y)
	}
}

const p1 = new Point(0, 4)
const p2 = new Point(3, 0)

console.log(p1.distance(p2))
console.log(p2.distance(p1))
console.log(p1.moveInX(10))
console.log(p1.distance(p2))
console.log(p2.moveInY(-4))
console.log(p1.distance(p2))