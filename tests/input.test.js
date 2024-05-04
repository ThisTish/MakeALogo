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

describe('prompt', () =>{
	afterEach(()=>{
		jest.resetAllMocks()
	})
	it('should take in letters after prompt', async ()=>{
		inquirer.prompt.mockResolvedValueOnce('dks')
		const actual = await prompts('abc')
		expect(actual).toBe('abc')
	})
})