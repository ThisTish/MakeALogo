const fs = require('fs')
const inquirer = require('inquirer')
const questions = require('./lib/input')
const {svgMarkUp, pickShape} = require('./lib/writeFile')

function writeToFile(fileName, data) {
	fs.writeFile(fileName, data, (err) =>{
		if(err){
			console.log('an error occured', err)
		}
		else{
			console.log('SVG file was written successfully')
		}
	})
}

function init() {
	inquirer.prompt(questions)
	.then((data) => {
		console.log(data)
		writeToFile("examples/b.svg", svgMarkUp(data))
	})
}
init()