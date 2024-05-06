const { Triangle } = require("../lib/shapes")
const { svgMarkUp, pickShape} = require("../lib/writeFile")

describe('shape script', () =>{
	it('should return the string for the Triangle class',() =>{
		const shape = new Triangle
		const color = 'black'
		expect(pickShape(shape, color)).toBe(`<polygon points = "150, 18 244, 182 56, 182" fill="black"/>`)
	})
})