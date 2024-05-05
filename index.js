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
		console.log(data.letters)
		console.log(data.text_color)
		console.log(data.shape)
		console.log(data.shape_color)
		
		writeToFile('examples/example.svg',svgMarkUp(data))
	})
}
init()