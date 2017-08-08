const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function() {

	it('Si la palabra original es un palíndromo, ninguna regla cuenta y se devuelve la misma palabra intercalando mayúsculas y minúsculas', function() {
		const translation = platzom("Programar")
		expect(translation).to.equal("Program")
	})

	it('Si la palabra termina en "ar", se le quitan esos dos caracteres', function() {
		const translation = platzom("Programar")
		expect(translation).to.equal("Program")
	})

	it('Si la palabra inicia con "Z", se le añade "pe" al final', function() {
		const translation = platzom("Zorro")
		const translation2 = platzom("Zarpar")

		expect(translation).to.equal("Zorrope")
		expect(translation2).to.equal("Zarppe")
	})

	it('Si la palabra traducida tiene 10 o más letras, separar por la mitad y unir mediante un guión', function() {
		const translation = platzom("sometemos")
		expect(translation).to.equal("SoMeTeMoS")
	})

})