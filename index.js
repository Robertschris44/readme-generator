// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./Develop/utils/generateMarkdown');



// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title of the project?",
    name: "Title",
   
}, 
{
    type: "input",
    message: "What is the description of your project?",
    name: "Description",
},
{//change to list
    type: "list",
    message: "Choose a license.",
    name: "license",
    choices: ['MIT', 'GNU', 'MPL'],
   
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
    message: "How to install",
    name: "installation",
},
{
    type: "input",
    message: "Contributing:",
    name: "contributing",
}

];
    
    

function writeToFile(fileName, data){
    fs.writeFile(fileName, data, function(err) {
        if(err) {
            console.log("Not Saved")
        }else {
            console.log("Success:Check sample folder")
        }
    })
}
    


// TODO: Create a function to initialize app
function init() {
    // inquirer.prompt(questions)
    // .then(function(data) {
    //     console.log(data);
    //     fileContent = generateMarkdown(data);
    //    writeToFile(fileContent);
    // });
    return inquirer.prompt(questions)
    .then((data) => {
        const layout = generateMarkdown(data)
        writeToFile('./Example/README.md', layout)
    })
    .catch((error) => {
        console.log(error)
    })
}

// Function call to initialize app
init();


