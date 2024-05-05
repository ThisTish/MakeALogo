class Shape {
	// constructor(color){
	// 	this.color = color
	// }
	setColor(color){
		this.color = color
		return this.color
	}
	render(){
		return `<polygon points = "150, 18 244, 182 56, 182" fill="${this.color}"/>`
}
}
// class Triangle extends Shape{
// 	super(input.shape_color)

// 	render(){
// 		return `<polygon points = "150, 18 244, 182 56, 182" fill="blue"/>`
// 	}
// }

// class Square extends Shape{

// 	render(){
// 		`<rect x="150" y="150" width="30" height="30" stroke="black" fill="${data.shape_color}"/>`
// 	}
// }
// class Circle extends Shape{

// 	render(){
// 		return `<circle cx="25" cy="75" r="20" stroke="red" fill="${data.shape_color}"/>`
// 	}
// }

module.exports = Shape
// module.exports = Triangle