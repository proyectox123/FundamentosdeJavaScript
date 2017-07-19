const p1 = {
	x : 0,
	y : 4
}

const p2 = {
	x : 3,
	y : 0
}

const getX = () => p1.x - p2.x
const getY = () => p1.y - p2.y
const distance = (p1, p2) => Math.sqrt(getX() * getX() + getY() * getY())

console.log(distance(p1, p2))