// const prompts = require("./lib/input");
const fs = require('fs')
const inquirer = require('inquirer')
// const prompts = require('./lib/input')
const questions = require('./lib/input')
const svgMarkUp = require('./lib/writeFile')

function writeToFile(fileName, data) {
	fs.writeFile(fileName, data, (err) =>{
		if(err){
			console.log('an error occured', err)
		}
		else{
			console.log('file was written')
		}
	})
}

function init() {
	inquirer.prompt(questions)
	.then((data) => {
		console.log(data)
		
		writeToFile('examples/example.svg',svgMarkUp(data))
	})
}
init()