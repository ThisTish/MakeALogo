const { Triangle, Square, Circle } = require("../lib/shapes")
const { svgMarkUp, pickShape} = require("../lib/writeFile")

describe('shape script', () =>{
	it('should return the string for the Triangle class with black fill',() =>{
		const shape = new Triangle
		const color = 'black'
		expect(pickShape(shape, color)).toBe(`<polygon points = "150, 18 244, 182 56, 182" fill="black"/>`)
	})
	it('should return the string for the Circle class with red fill',() =>{
		const shape = new Circle
		const color = 'red'
		expect(pickShape(shape, color)).toBe(`<circle cx="25" cy="75" r="20" fill="red"/>`)
	})
	it('should return the string for the Square class with yellow fill',() =>{
		const shape = new Square
		const color = 'yellow'
		expect(pickShape(shape, color)).toBe(`<rect x="150" y="150" width="30" height="30" fill="yellow"/>`)
	})
})