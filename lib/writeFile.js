
const { Shape, Triangle, Square, Circle} = require("../lib/shapes")

function pickShape(shape, color) {
	// console.log(shape,color)
	try {
		let shapeInstance
		switch(shape){
			case "Triangle":
				shapeInstance = new Triangle(color)
				break
			case "Square":
				shapeInstance = new Square(color)
				break
			case "Circle":
				shapeInstance = new Circle(color)
				break
		}
		// console.log(typeof(shapeInstance))
		return shapeInstance.render()
	} catch (error) {
		console.log(error, "error in making shape")
	}
}


function svgMarkUp(data){
	return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
	${pickShape(data.shape, data.shape_color)}

	<text x="150" y="175" font-size="90" text-anchor="middle" fill="${data.text_color}">${data.letters}</text>

</svg>
`
}
module.exports = { svgMarkUp, pickShape}

// pickShape('Triangle', 'black')