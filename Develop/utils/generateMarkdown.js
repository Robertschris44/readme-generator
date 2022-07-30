const fs =require('fs');
const inquirer = require('inquirer');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache") {
      '![License](https://opensource.org/licenses/Apache-2.0)'
  } else if (license === "MIT") {
      '![License: MIT](https://opensource.org/licenses/MIT)'
  } else if (license === "IBM") {
      '![License: IPL 1.0](https://opensource.org/licenses/IPL-1.0)'
  } else { '' }
}
return;

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  if (license === 'Apache') {
      licenseLink = '[![License](https://opensource.org/licenses/Apache-2.0)'
  } else if (license === 'MIT') {
      licenseLink = '[![License: MIT(https://opensource.org/licenses/MIT)'
  } else if (license === 'IBM') {
      licenseLink = '[![License: IPL 1.0](https://opensource.org/licenses/IPL-1.0)'
  } else {
      licenseLink = ''
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = '';
  if (license === 'None') {
      licenseSection = ''
  } else {
      licenseSection =
          'License: ${license}'
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {
  return `# ${answer.title}
## ${renderLicenseSection(answer.license)} ${renderLicenseBadge(answer.license)}
### ${renderLicenseLink(answer.license)}
7:29
##Table of Contents
-[License](#license)
-[Installation](#installation)
-[Usage](#usage)
-[Features](#features)
-[Credits](#contributors & credit)
-[Tests](#tests)
-[Email](#email)
-[How to contribute](#how to contribute)
7:30
##Installation:
### You must install the following for this app to function:
- ${answer.installation}
## Features:
### ${answer.features}
## Contributor:
### ${answer.contribution}
## Tests:
### Run the following commands in your terminal to test this app:
### ${answer.test}
7:30
## Questions:
### If you have any questions, you may contact at either
### Github: https://github.com/${answer.askMe}
### or
### Email: ${answer.email}
`;
}

module.exports = generateMarkdown;
