// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
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
    name: 'table of contents',
    message: 'Add table of contents',
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
    name: 'test',
    message: 'Write tests for your application and how to use them',
  },
  {
    type: 'input',
    name: 'questions',
    message: 'List instructions for those who want to contact you',
  },
  {
    type: 'confirm',
    name: 'confirmLicense',
    message: 'Would you like to include a license?',
  },
  {
    type: 'list',
    name: 'licenses',
    message: 'Choose a license',
    choices: ['MIT', 'GPL', 'Apache-2.0'],
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
