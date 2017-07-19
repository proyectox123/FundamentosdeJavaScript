const starWars7 = 'Star Wars: El despertar de la fuerza',
	pgStarWars7 = 13,
	nameMau = 'Mau',
	nameSanty = 'Santy';
	nameGalo = 'Galo';
	nameSomebody = 'Somebody'

let ageMau = 26,
	ageSanty = 7,
	ageGalo = 5,
	ageSomebody;

const canWatchStarWars = (name, age, isWithAdult = false)  => {
	if(hasValidAge(age)){
		alert(`${name} puede pasar a ver ${starWars7}`)
		return
	}

	if(isWithAdult){
		alert(`${name} puede pasar a ver ${starWars7}. Aunque su edad es ${age}, se encuentra acompañad@ por un adulto`)
		return
	}

	alert(`${name} no puede pasar a ver ${starWars7} :( Tiene ${age} años y necesita tener ${pgStarWars7}`)
}

const hasValidAge = (age) => age >= pgStarWars7

canWatchStarWars(nameMau, ageMau)
canWatchStarWars(nameSanty, ageSanty, true)
canWatchStarWars(nameGalo, ageGalo, true)
canWatchStarWars(nameSomebody, ageSomebody)