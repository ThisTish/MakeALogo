// ! issue. was working, but code wasn't now code works, but testing doesn't. will come back to.
const prompts = require("../lib/input");
const inquirer = require('inquirer')

jest.mock('inquirer', () => {
	return {prompts: jest.fn()}
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














// *going to try this route.
jest.mock('inquirer', () => {
    return {
        prompt: jest.fn() // Mocking the prompt function
    };
});

const inquirer = require('inquirer'); // Importing the mocked inquirer module
const { prompts } = require('./your-module'); // Importing the module under test

describe('letters prompt', () => {
    afterEach(() => {
        jest.resetAllMocks();
    });

    it('should take in letters after prompt', async () => {
        // Mocking the prompt function to resolve with '123' when called
        inquirer.prompt.mockResolvedValueOnce({ input: '123' });

        // Testing the prompts function
        const result = await prompts();

        // Asserting that the result is '123'
        expect(result).toBe('123');

        // Asserting that inquirer.prompt was called with the correct arguments
        expect(inquirer.prompt).toHaveBeenCalledWith(/* any arguments you expect */);
    });
});


// *doesn't work properly but almost there.
// describe('prompt validate', () =>{
// 	afterEach(()=>{
// 		jest.resetAllMocks()
// 	})
// 	it('should reject answer and alert to enter less than 3 characters if more than 3 entered', async() =>{
// 		expect(await validateLength('123')).toBe(false)
// 	})

// })