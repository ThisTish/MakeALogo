const validateLength = require("../lib/input");
const prompts = require("../lib/input");
const inquirer = require('inquirer')

// jest.mock('inquirer')

// describe('prompts', ()=>{
// 	it('should prompt for and recieve the characters', async ()=>{
		
// 		inquirer.prompt = jest.fn().mockResolvedValue({letters: 'abc'})

// 		await expect(prompts()).resolves.toEqual({letters: 'abc'})
// 	})
// })



// jest.mock('inquirer')
// describe('prompts', () =>{
// 	it('should take in letters after prompted', async ()=>{
// 		expect.assertions(1)
// 		inquirer.prompt = jest.fn().mockResolvedValue({letters:'123'})
// 		expect(prompts()).toEqual({letters: '123'})
// 	})
// })

jest.mock('inquirer', () => {
	return {prompt: jest.fn()}
})

describe('prompt letters', () =>{
	afterEach(()=>{
		jest.resetAllMocks()
	})
	it('should take in letters after prompt', async ()=>{
		expect(await prompts(inquirer.prompt.mockResolvedValueOnce('123'))).toBe('123')
	})
	// *doesn't work properly but almost there.
	// it('should reject answer and alert to enter less than 3 characters if more than 3 entered', async() =>{
	// 	expect(await validateLength(inquirer.prompt.mockResolvedValueOnce('1234'))).toEqual(true)
	// })
})