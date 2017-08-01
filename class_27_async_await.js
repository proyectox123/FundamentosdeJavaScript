async function getLuke(callNumber) {
	try {
		if(callNumber == 1) await setTimeout(null, 4000)
		const response = await fetch("https://www.swapi.co/api/people/1/")
		const luke = await response.json()
		const responseHomeworld = await fetch(luke.homeworld)
		luke.homeworld = await responseHomeworld.json()
		console.log(`Call #${callNumber} ${luke.name} nacio en ${luke.homeworld.name}`)
	} catch (err) {
		console.log(err)
	}
}
console.log("First")
getLuke(1);
getLuke(2);
getLuke(3);
console.log("Second")