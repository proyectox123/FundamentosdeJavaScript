setTimeout(function callback(){
	console.log("A")
}, 1000)

for(let i=0; i<9999999999; i++);

console.log("B")