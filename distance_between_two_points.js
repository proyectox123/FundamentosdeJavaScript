const p1 = {
	x : 0,
	y : 4,
	moveInX : function (x) { this.x += x },
	moveInY : function (y) { this.y += y }
}

const p2 = {
	x : 3,
	y : 0,
	moveInX : function (x) { this.x += x },
	moveInY : function (y) { this.y += y }
}

const getX = () => p1.x - p2.x
const getY = () => p1.y - p2.y
const distance = (p1, p2) => Math.sqrt(getX() * getX() + getY() * getY())

console.log(distance(p1, p2))
console.log(p1.moveInX(10))
