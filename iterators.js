function fibonacci(){
	let a = 0, b = 1
	return {
		next: function() {
		 let f = a
		 a = b
		 b = f + a
		 return{ value: f, done: false}
		}
	}
}

const fibo = fibonacci()
fibo.next().value //0
fibo.next().value //1
fibo.next().value //1
fibo.next().value //2
fibo.next().value //3
fibo.next().value //5
fibo.next().value //8
fibo.next().value //13
fibo.next().value //21
fibo.next().value //34
fibo.next().value //55
fibo.next().value //89

const fibo = {}
fibo[Symbol.iterator] = fibonacci 

let i = 0
for(let value of fibo){
	console.log(value)
	i++

	if(i > 20) break
}