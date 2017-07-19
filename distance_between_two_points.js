function Point(x, y){
	this.x = x
	this.y = y
}

Point.prototype.moveInX = function moveInX(x) { this.x += x },
Point.prototype.moveInY = function moveInY(y) { this.y += y },
Point.prototype.distance = function distance(p){
	const x = this.x - p.x
	const y = this.y - p.y

	return Math.sqrt(x * x + y * y)
}

const p1 = new Point(0, 4)
const p2 = new Point(3, 0)

console.log(p1.distance(p2))
console.log(p2.distance(p1))
console.log(p1.moveInX(10))
console.log(p1.distance(p2))
console.log(p2.moveInY(-4))
console.log(p1.distance(p2))