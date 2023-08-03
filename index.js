// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'githubUsername',
    message: 'Enter your github username',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address',
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Write a short description about what your project is',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps to install your project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Instructions for usage',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Write guidelines on how other developers can contribute',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Write tests for your application and how to use them',
  },
  {
    type: 'confirm',
    name: 'confirmLicense',
    message: 'Would you like to include a license?',
    default: false
  },
  {
    type: 'list',
    name: 'licenses',
    message: 'Choose a license',
    choices: ['MIT', 'GPL', 'Fair'],
    when: ({ confirmLicense }) => {
      if (confirmLicense) {
        return true;
      } else {
        return false;
      }
    }
  }
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
 err ? console.error(err) : console.log('Success!, Go into utils folder to see your README.md file'));
}

// Function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((answers) => {
    writeToFile('./utils/README.md', generateMarkdown(answers));
  })
}

// Function call to initialize app
init();
