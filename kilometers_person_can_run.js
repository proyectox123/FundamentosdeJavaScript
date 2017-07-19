const nombre = 'Mau'
const dias = [
	'lunes',
	'martes',
	'miércoles',
	'jueves',
	'viernes',
	'sábado',
	'domingo'
]

function correr() {
	const min = 5
	const max = 15
	return Math.round(Math.random() * (max - min)) + min
}

let totalKm = 0
const length = dias.length
for(let i=0; i < length; i++){
	const kms = correr()
	totalKm += kms
	console.log(`El día ${i}, ${nombre} corrió ${kms} kms`)
}

const average = totalKm / length
console.log(`En promedio, ${nombre} corrió ${average.toFixed(2)} kms`)