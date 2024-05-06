const { Shape, Triangle, Square, Circle} = require("../lib/shapes")

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

describe('square shape', () =>{
	const shape = new Square
	shape.setColor('green')
	it('should return a string to render a green square',()=>{
		expect(shape.render()).toEqual(`<rect x="50" y="0" width="200" height="200" fill="green"/>`)
	})
})

describe('circle shape', () =>{
	const shape = new Circle
	shape.setColor('yellow')
	it('should return a string to render a yellow circle',()=>{
		expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="100" fill="yellow"/>`)
	})
})

