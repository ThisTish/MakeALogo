# **Make A Logo**


## 📰 Description

Make a quick svg logo with only answering a few questions!

## 🔎 Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## 💾 Installation <a id="installation"></a>

Start by cloning the code from the GitHub repository. Then run ```git clone <clone link>``` in your terminal in a chosen directory. This application will need node and npm installed. You will then have to run ```npm install``` in the root directory to recieve all the necessary packages need to run this application.

## 🖱️ Usage <a id="usage"></a>


To make your own high-quality svg logo:

You can initialize this application in a code editor, e.g., VS Code, by opening the cloned repository and running ```node index.js``` in the editor's terminal window.

You can also run the same command ```node index.js``` in your desktop's terminal, as long as you are in the repository's directory.

The application will run through a series of prompts where you will choose some details for your logo. You will need to use at least 1 character but no more than 3 for the content of the logo. Using a color keyword or hex code for picking the color of your text and of your shape is available. There is a choice of Square, Circle, or Triangle for the base shape of it all.

Once completing all the prompts, a file named logo.svg will be created in the dist directory. It will also log that it has been created in the console. You can view it by opening the file in the browser. One way to quickly do that is to open the file in file explorer and double click it. To view from VS Code open the file, and then use the keyboard shortcut <strong>ALT + B</strong> for Windows or <strong>Cmd + Shift + V</strong> for Apple users.

This application was made to be used again and again, but the logo.svg file will be written over with the new responses each time. So be sure to save it to another directory, or with another name if you'd like to keep it.

[*Video Demo*](https://drive.google.com/file/d/1rLneUphi67GZ3sSGxjdPNGFyZIFTSiP9/view) Demonstrating each shape, input requirements, input options, different ways to view, and tests to run.

## 🖼️ Examples <a id="examples"></a>

![Circle Example](examples/circle.svg)
![Triangle Example](examples/triangle.svg)
![Square Example](examples/square.svg)

## 🌐 Contributing <a id="contributing"></a>


Please contact me through my email provided below to work together. 

## 📝 Tests <a id="tests"></a>

Tests were conducted using the [Jest](https://jestjs.io/docs/getting-started) package.

There are tests written for the shape classes, to evaluate that they rendered their specifications properly, and that the color choice was passed properly to it. It is available to run by using the command ```npm test tests/shapes.test.js```. It should pass all 4 tests.

More tests were made for the file writing process of this application. In the terminal, run ```npm test tests/writeFile.test.js```. There, 3 tests should pass. They are there to insure that the shape and color selection will be entered in the SVG markup correctly.

## ✋ Questions <a id="questions"></a>


If you have any questions, feel free to contact me at:

- *GitHub: [ThisTish](https://github.com/thistish)*
- *Email: tish.sirface@gmail.com*

