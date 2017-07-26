class Toggable{
	constructor(el){//element
		this.el = el
		this.el.innerHTML = "Off"
		this.activated = false
		this.el.addEventListener('click', this.onClick.bind(this))
	}

	onClick(){
		this.activated = !this.activated
		this.toggleText()
	}

	toggleText(){
		this.el.innerHTML = this.activated ? 'On' : 'Off'
	}
}

const button = document.getElementById("boton")

const myButton = new Toggable(button)