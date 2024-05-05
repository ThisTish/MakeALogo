// const { blue } = require("colors")
const Triangle = require("../lib/shapes")
const Shape = require("../lib/shapes")

describe('shape class', () =>{
	it('should return a color selected', ()=>{
		const shape = new Shape()
		expect(shape.setColor('blue')).toBe('blue')
	})
	it('should fill the string with the color selected', ()=>{
		const shape = new Shape()
		shape.setColor('blue')
		expect(shape.render()).toEqual(`<polygon points = "150, 18 244, 182 56, 182" fill="blue"/>`)
	})
})



// describe('triangle shape', () =>{
// 	const shape = new Triangle
// 	shape.setColor('blue')
// 	it('should render a triangle with a blue fill', ()=>{
// 		expect(shape.render()).toEqual('<polygon points = "150, 18 244, 182 56, 182" fill="blue"/>')
// 	})
// })

