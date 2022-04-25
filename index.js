// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const nameInput = {};

const promptRead = (readmeData) => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'userName',
        message: 'What is your github username?',
        validate: titleInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('please enter your github username!');
            return false;
          }
        }
      },
      {
          type: 'input',
          name: 'title',
          message: 'What is the title of your project?',
          validate: titleInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('please enter your projects title!');
              return false;
            }
          }
      },
      {
          type: 'input',
          name: 'description',
          message: 'enter a description for your project',
          validate: descriptionInput => {
              if (descriptionInput) {
                  return true;
              } else {
                  console.log('please enter a description for your project!');
                  return false;
              }
          }
      },
      {
          type: 'input',
          name: 'installInput',
          message: 'enter special installation instructions required for your project',
      },
      {
        type: 'list',
        name: 'license',
        message: 'select any licenses you will need to include',
        choices: ['APACHE 2.0', 'Boost', 'BSD 3', 'MIT', 'N/A'],
      },
      {
        type: 'input',
        name: 'instruction',
        message: 'please explain how to operate/use your product'
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'please add any contributors/contribution guidelines'
      },
      {
        type: 'input',
        name: 'email',
        message: 'please enter your email address',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('please enter an email address!');
            return false;
          }
        }
      },
    ])      
    })
};

promptRead();
// TODO: Create a function to write README file
function writeToFile(data) {
  fs.writeFile('README.md', data, (err) => {
    if (err) throw err;
  });
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
//init();