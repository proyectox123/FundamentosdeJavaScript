let count = 0
function fibonacci (num, storage = {}) {
	count++
	if(storage[num]) return storage[num]
	if(num == 1) return 0;
	if(num == 2) return 1;
	

	return storage[num] = fibonacci(num - 1, storage) + fibonacci(num - 2, storage) 
}

fibonacci(8)//13
console.log(`count ${count}`)