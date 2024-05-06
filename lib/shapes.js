class Shape {
	// constructor(color){
	// 	this.color = color
	// }
	setColor(color){
		this.color = color
		return this.color
	}
}
class Triangle extends Shape{
	constructor(color){
	super(color)
}
	render(){
		return `<polygon points = "150, 18 244, 182 56, 182" fill="${this.color}"/>`
	}
}

class Square extends Shape{
	constructor(color){
		super(color)
	}
	render(){
		return `<rect x="150" y="150" width="30" height="30" fill="${this.color}"/>`
	}
}

class Circle extends Shape{
	constructor(color){
		super(color)
	}
	render(){
		return `<circle cx="25" cy="75" r="20" fill="${this.color}"/>`
	}
}

module.exports = { Shape, Triangle, Square, Circle}
