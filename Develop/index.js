// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');

// TODO: Create an array of questions for user input
inquirer.prompt([

    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'username',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub username is required.");
            }
            return true;
        }
    },
    
    {
        type: 'input',
        name: 'profileLink',
        message: 'Please enter a GitHub link to your user profile.:',
        validate: linkInput => {
            if (linkInput) {
                return true;
            } else {
                console.log('Please enter your GitHub Link!');
                return false;
            }
        }
    },

    {
        type: 'input',
        message: "What is the name of your repository?",
        name: 'repo',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub repo is required for a badge.");
            }
            return true;
        }
    },

    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project title is required.");
            }
            return true;
        }
    },

    {
        type: 'input',
        message: "Please write a short description of your projects.",
        name: 'description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project description is required.");
            }
            return true;
        }
    },

    {
        type: 'input',
        message: "Please describe the steps required to install your project.",
        name: 'install'
    },

    {
        type: 'input',
        message: "Please provide instructions and examples of your project in use.",
        name: 'usage'
    },

    {
        type: 'list',
        name: 'license',
        choices: ['MIT License', 'Apache 2.0', 'Creative Commons Zero v1.0', 'The Unlicense']
    },
])
.then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    // Function to write README file

    fs.writeFile(filename, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Success!")
    });
});


//Function to initialize app
function init() {
    questions()
}

// Function call to initialize app
init();
