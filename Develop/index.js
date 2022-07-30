// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');


const generatorMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title of the project?",
    name: "Title",
    validate: nameInput =>{
        if (nameInput) {
            return true;
        }else {
            console.log('Enter name');
            return false;
        }
    }
}, 
{
    type: "input",
    message: "What is the description of your project?",
    name: "Description",
},
{//change to list
    type: "list",
    message: "Choose a license.",
    name: "License",
    choices: ['Apache', 'IBM', 'MIT'],
    validate: licenseInput = () =>{
        if (licenseInput){
            return true;
        }else {
            console.log('Please select options')
            return false;
        }
    }
},
{
    type: "input",
    message: "What is your Github username?",
    name: "Username",
},
{
    type: "input",
    message: "What is your email address?",
    name: "Email",
},
{
    type: "input",
    message: "Table of Contents",
    name: "Table of Contents",
}
]
    
    
    
// TODO: Create a function to write README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) =>{
        fs.writeFile('./generateREADME.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve((
                true
            ));
        });

    });

};
    


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        console.log(data);
        fileContent = generatorMarkdown(data);
       writeToFile(fileContent);
    });
}

// Function call to initialize app
init();

module.exports = questions;
