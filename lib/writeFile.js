
const { Shape, Triangle, Square, Circle} = require("../lib/shapes")

function pickShape(shape, color) {
	shape.setColor(color)
	return shape.render()
}


function svgMarkUp(data){
	return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
	${pickShape(data.shape)}

	<text x="150" y="175" font-size="60" text-anchor="middle" fill="${data.text_color}">${data.letters}</text>

</svg>
`
}
module.exports = { svgMarkUp, pickShape}

// pickShape(Triangle, 'black')