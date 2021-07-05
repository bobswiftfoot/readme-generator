const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project? (Required)',
        validate: titleInput => 
        {
            if (titleInput)
                return true;
            else
            {
                console.log("Please enter the title!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter your project description (Required)',
        validate: descriptionInput => 
        {
            if (descriptionInput)
                return true;
            else
            {
                console.log("Please enter your project description!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter your installation instructions (Required)',
        validate: installationInput => 
        {
            if (installationInput)
                return true;
            else
            {
                console.log("Please enter your installation instructions !");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter how to use your project (Required)',
        validate: installationInput => 
        {
            if (installationInput)
                return true;
            else
            {
                console.log("Please enter how to use this project!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contributers to your project (Required)',
        validate: contributeInput => 
        {
            if (contributeInput)
                return true;
            else
            {
                console.log("Please enter contributers to your project!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter how to test your project (Required)',
        validate: testInput => 
        {
            if (testInput)
                return true;
            else
            {
                console.log("Please enter how to test your project!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github username (Required)',
        validate: githubInput => 
        {
            if (githubInput)
                return true;
            else
            {
                console.log("Please enter your Github username!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email (Required)',
        validate: emailInput => 
        {
            if (emailInput)
                return true;
            else
            {
                console.log("Please enter your email!");
                return false;
            }
        }
    },
    {
        type: 'list',
        message: 'What license will be used?',
        name: 'license',
        choices: ['Apache 2.0', 'GNU GPL v3', 'GNU AGPL v3', 'MIT', 'Mozilla Public License 2.0']
    }
];

function writeToFile(fileName, data) 
{
    return new Promise((resolve, reject) => 
    {
        fs.writeFile(fileName, data, err =>
        {
            if (err)
            {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
}

const promptUser = () => inquirer.prompt(questions);

function init() 
{
    promptUser()
        .then(readmeData =>
        {
            return generateMarkdown(readmeData);
        })
        .then(markdownData =>
        {
            return writeToFile("./dist/README.md", markdownData);
        })
        .then(writeFileResponse =>
        {
            console.log(writeFileResponse);
        })
        .catch(err =>
        {
            console.log(err);
        });
}

// Function call to initialize app
init();
