const inquirer = require('inquirer')

// *function for validate, but messes with first test
// function validateLength(input){
// 	if(input && input.length <=3) return true;
// 	return false
// }

const questions = [{
	name:'letters',
	type: 'input',
	message: "Please enter up to 3 characters for your logo",
	validate: async (input) =>{
		if( input && input.length <= 3){
			return true
		}
		else{
			return "Please enter at least one character and less than 4"
		}
	}
	
// },
// {
// 	name: 'text_color',
// 	type: 'input',
// 	message:'What color would you like the text?',
// 	default:'#ffffff'
	
// },
// {
// 	name: 'shape',
// 	type: 'list',
// 	message: 'What shape would you like your logo to be?',
// 	choices: ['circle', 'triangle', 'square']
	
// },
// {
// 	name: 'shape_color',
// 	type: 'input',
// 	message: 'What color would you like for the shape of your logo?',
// 	default: '#000000'
}]

const prompts = async (request) =>{
	const answer = await inquirer.prompt(request)
	console.log(answer)
	console.log(answer.letters)

	return answer
}

prompts(questions)

module.exports = prompts