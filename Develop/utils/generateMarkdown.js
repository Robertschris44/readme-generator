// const fs =require('fs');
// import inquirer from 'inquirer';
// const inquirer = require('inquirer');


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license != "None"){
        const badges = {
        MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://choosealicense.com/licenses/mit)",
        GNU: "[![License: GNU](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://choosealicense.com/licenses/mit)",
        MPL: "[![License: MPL](https://img.shields.io/badge/License-MPL_2.0-red.svg)](https://choosealicense.com/licenses/mit)"
        }
        return badges[license]
    }else {
        return '';
    }
};

function renderLicenseLink(license) {
    if(license != 'None'){
        const credentiallinks = {
            MIT: "[MIT](https://choosealicense.com/licenses/mit/)",
            GNU: "[GNU](https://choosealicense.com/licenses/gpl-3.0/)",
            MPL: "[MPL](https://choosealicense.com/licenses/mpl-2.0/)",
        }
        return credentiallinks[license]
    }else {
        return '';
    }
};

function renderTableLink(license) {
    if(license != 'None'){
        return `
-[License](#license)
          `
    }else {
        return '';
    }
};

    

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if(license != 'None'){
    return `## License

Licensed under the ${renderLicenseLink(license)} license.`
}else {
    return '';
}
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return ` # ${response.title}

  ${renderLicenseBadge(response.license)}



## Table of Contents
- [Installation](#installation)
- [Contributor](#contributor)
- [Tests](#tests)
- [Usage](#usage)
- [Questions](#questions)
${renderTableLink(response.license)}


## Installation
${response.installation}

## Contributors
${response.contributors}


## Tests
${response.tests}

## [Usage]
${response.usage}

## Questions:
 If you have any questions, you may contact at either
 Github: https://github.com/${response.github}

Or email me at:
${response.email}

${renderLicenseSection(response.license)}
      `
};

module.exports = generateMarkdown;
