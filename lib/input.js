const inquirer = require('inquirer')

const questions = [{
	name:'letters',
	type: 'input',
	message: 'Please enter up to 3 characters for your logo',
	default: ''
	
},
{
	name: 'text_color',
	type: 'input',
	message:'What color would you like the text?',
	default:'#ffffff'
	
},
{
	name: 'shape',
	type: 'list',
	message: 'What shape would you like your logo to be?',
	choices: ['circle', 'triangle', 'square']
	
},
{
	name: 'shape_color',
	type: 'input',
	message: 'What color would you like for the shape of your logo?',
	default: '#000000'
}]

function prompts(){
	inquirer.prompt(questions)
	.then((data) => console.log(data))
}
prompts(questions)