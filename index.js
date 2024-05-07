const fs = require('fs')
const inquirer = require('inquirer')
const questions = require('./lib/input')
const {svgMarkUp, pickShape} = require('./lib/writeFile')
const chalk = require('chalk')

function writeToFile(fileName, data) {
	fs.writeFile(fileName, data, (err) =>{
		if(err){
			console.log('an error occured', err)
		}
		else{
			console.log(chalk.inverse('Generated logo.svg'))
		}
	})
}

function init() {
	inquirer.prompt(questions)
	.then((data) => {
		console.log(data)
		writeToFile("dist/logo.svg", svgMarkUp(data))
	})
}
init()