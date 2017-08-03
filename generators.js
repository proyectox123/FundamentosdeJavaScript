function* fibonacci(){
	let a = 0, b = 1

	while(true){
		let f = a
		a = b
		b = f + a
		console.log(`-> a - ${a}, b - ${b}, f - ${f}`)
		let reset = yield f
		if(reset) a = 0, b = 1
	}

	return {
		next: function(reset) {
			if(reset) a = 0, b = 1
		 	
		 	return{ value: f, done: false}
		}
	}
}

const fibo = fibonacci()
fibo.next()