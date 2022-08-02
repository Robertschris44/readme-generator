// const fs =require('fs');
// import inquirer from 'inquirer';
// const inquirer = require('inquirer');


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(credentials) {
    if(credentials != "None"){
        const badges = {
        MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://choosealicense.com/licenses/mit)",
        GNU: "[![License: GNU](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://choosealicense.com/licenses/mit)",
        MPL: "[![License: MPL](https://img.shields.io/badge/License-MPL_2.0-red.svg)](https://choosealicense.com/licenses/mit)"
        }
        return badges[credentials]
    }else {
        return '';
    }
};

function renderLicenseLink(credentials) {
    if(credentials != 'None'){
        const credentiallinks = {
            MIT: "[MIT](https://choosealicense.com/licenses/mit/)",
            GNU: "[GNU](https://choosealicense.com/licenses/gpl-3.0/)",
            MPL: "[MPL](https://choosealicense.com/licenses/mpl-2.0/)",
        }
        return credentiallinks[license]
    }else{
        return '';
    }
}

function renderTableLink(credentials) {
    if(credentials != 'None'){
        return `
        -[License](#license)
          `
    }else {
        return '';
    }
};

    

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(credentials) {
if(credentials != 'None'){
    return `## License
Licensed under the ${renderLicenseLink(credentials)} license.`
}
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}
## ${renderLicenseSection(response.credentials)} ${renderLicenseBadge(response.credentials)}
### ${renderLicenseLink(response.credentials)}

##Table of Contents
-[License](#license)
-[Installation](#installation)
-[Usage](#usage)
-[Features](#features)
-[Credits](#contributors & credit)
-[Tests](#tests)
-[Email](#email)
-[How to contribute](#how to contribute)

##Installation:
### You must install the following for this app to function:
- ${response.installation}
## Features:
### ${response.features}
## Contributor:
### ${response.contribution}
## Tests:
### Run the following commands in your terminal to test this app:
### ${response.test}

## Questions:
### If you have any questions, you may contact at either
### Github: https://github.com/${response.askMe}
### or
### Email: ${response.email}
`;
}

module.exports = generateMarkdown;
