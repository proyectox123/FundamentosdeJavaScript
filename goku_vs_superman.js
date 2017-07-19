let lifeGoku = 100
let lifeSuperman = 100

const MIN_POWER = 5
const MAX_POWER = 12

const bothStillAlive = () => lifeGoku > 0 && lifeSuperman > 0
const calculateHit = () => Math.round(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER)
const gokuStillAlive = () => lifeGoku > 0

let round = 1

while(bothStillAlive()) {
	console.log(`Round ${round}`)
	round++;
	const golpeGoku = calculateHit()
	const golpeSuperman = calculateHit()
	if(golpeGoku === golpeSuperman){
		console.log(`Empate, golpeGoku: ${golpeGoku} - golpeSuperman ${golpeSuperman}`)
		continue
	}

	if(golpeGoku > golpeSuperman){
		lifeSuperman -= golpeGoku
		console.log(`Goku ataca con un golpe de ${golpeGoku} - Superman queda con ${lifeSuperman} de vida`)
		continue
	}

	lifeGoku -= golpeSuperman
	console.log(`Superman ataca con un golpe de ${golpeSuperman} - Goku queda con ${lifeGoku} de vida`)
}

let label = gokuStillAlive() ? `Goku ganó la pelea, su vida es ${lifeGoku}` : `Superman ganó la pelea, su vida es ${lifeSuperman}`
console.log(`${label}`)