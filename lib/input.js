const inquirer = require('inquirer')
const chalk = require('chalk');
const { black } = require('colors');
const error = chalk.bold.red
const textMessage = chalk.blue('3 characters')
const colorWord = chalk.red('c')+(chalk.green('o'))+(chalk.blue('l'))+(chalk.yellow('o'))+(chalk.magenta('r'));



const questions = [{
	name:'letters',
	type: 'input',
	message: `Please enter up to ${textMessage} for your logo.`,
	validate: async (input) =>{
		if( input && input.length <= 3){
			return true
		}
		else{
			return error("Please enter at least one character and less than 4")
		}
	},
},
{
	name: 'text_color',
	type: 'input',
	message:`What ${colorWord} would you like the text?`,
	suffix:'(keyword or hex)',
	default:'white'
	
},
{
	name: 'shape',
	type: 'list',
	message: 'What shape would you like for your logo?',
	choices: ['Circle', 'Triangle', 'Square']
	
},
{
	name: 'shape_color',
	type: 'input',
	message: `What ${colorWord} would you like for the shape?`,
	suffix: '(keyword or hex)',
	default: 'black'
}]

// *was just for testing
// const prompts = async (request) =>{
// 	const answer = await inquirer.prompt(request)
// 	console.log(answer)
// 	return answer
// }
module.exports = prompts
module.exports = questions

