// const { blue } = require("colors")
const Triangle = require("../lib/shapes")
const Shape = require("../lib/shapes")
const Square = require("../lib/shapes")

describe('shape class', () =>{
	it('should return a color selected', ()=>{
		const shape = new Shape()
		expect(shape.setColor('blue')).toBe('blue')
	})
})

describe('triangle shape', () =>{
	const shape = new Triangle
	shape.setColor('blue')
	it('should render a triangle with a blue fill', ()=>{
		expect(shape.render()).toEqual('<polygon points = "150, 18 244, 182 56, 182" fill="blue"/>')
	})
})

// describe('square shape', () =>{
// 	const shape = new Square
// 	shape.setColor('green')
// 	it('should return a string to render the shape and color of logo',()=>{
// 		expect(shape.render()).toEqual(`<rect x="150" y="150" width="30" height="30" fill="green"/>`)
// 	})
// })

