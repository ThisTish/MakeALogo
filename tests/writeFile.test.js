// const { Triangle, Square, Circle } = require("../lib/shapes")
const { svgMarkUp, pickShape} = require("../lib/writeFile")

describe('shape script', () =>{
	it('should return the string for the Triangle class with black fill',() =>{
		const shape =  "Triangle"
		const color = 'black'
		expect(pickShape(shape, color)).toBe(`<polygon points = "150, 18 244, 182 56, 182" fill="black"/>`)
	})
	it('should return the string for the Circle class with red fill',() =>{
		const shape =  "Circle"
		const color = 'red'
		expect(pickShape(shape, color)).toBe(`<circle cx="150" cy="100" r="100" fill="red"/>`)
	})
	it('should return the string for the Square class with yellow fill',() =>{
		const shape =  "Square"
		const color = 'yellow'
		expect(pickShape(shape, color)).toBe(`<rect x="50" y="0" width="200" height="200" fill="yellow"/>`)
	})
})
// *working on it. i think formatting is messing it up.
// describe('SVG code', () =>{
// 	const data = {
// 		letters: 'one',
// 		text_color: 'black',
// 		shape: 'Circle',
// 		shape_color: 'pink'
// 	}
// 	it('should make a pink circle with black letters of "one"',()=>{
// 	expect(svgMarkUp(data)).toBe(`<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
// 	<circle cx="150" cy="100" r="100" fill="pink"/>
	
// 	<text x="150" y="175" font-size="90" text-anchor="middle" fill="black">one</text>

// </svg>
// `)}
// )
// })