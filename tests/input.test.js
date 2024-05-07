// ! doesn't really work. I tried for a bit.


const prompts = require("../lib/input");
const inquirer = require('inquirer')

jest.mock('inquirer', () => {
	return {prompt: jest.fn()}
})

describe('letters prompt', () =>{
	afterEach(()=>{
		jest.resetAllMocks()
	})
	it('should take in letters after prompt', async ()=>{
		expect(await prompts(inquirer.prompt.mockResolvedValueOnce('123'))).toBe('123')
	})
})
describe('text color prompt', () =>{
	afterEach(()=>{
		jest.resetAllMocks()
	})
	it('should take in the color of choice for the letters', async ()=>{
		expect(await prompts(inquirer.prompt.mockResolvedValueOnce('navy'))).toBe('navy')
	})
})
describe('shape prompt', () =>{
	afterEach(()=>{
		jest.resetAllMocks()
	})
	it('should return the choice of shape for logo', async ()=>{
		expect(await prompts(inquirer.prompt.mockResolvedValueOnce('triangle'))).toBe('triangle')
	})
})
describe('shape color prompt', () =>{
	afterEach(()=>{
		jest.resetAllMocks()
	})
	it('should return the choice of shape color for logo', async ()=>{
		expect(await prompts(inquirer.prompt.mockResolvedValueOnce('black'))).toBe('black')
	})
})



















// *doesn't work properly but almost there.
// describe('prompt validate', () =>{
// 	afterEach(()=>{
// 		jest.resetAllMocks()
// 	})
// 	it('should reject answer and alert to enter less than 3 characters if more than 3 entered', async() =>{
// 		expect(await validateLength('123')).toBe(false)
// 	})

// })