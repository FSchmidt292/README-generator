// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
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
                  return: false;
              }
          }
      },
      {
          type: 'input',
          name: 'installInput',
          message: 'enter special installation instructions',
      },
      {

      }    
    ])
}

promptUser();

console.log('hello node!');
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
