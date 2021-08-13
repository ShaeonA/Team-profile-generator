const generateHTML = ("./utils/generateHTML")
const inq = require('inquirer')
const fs = require('fs');
const inquirer = require('inquirer');
const teamMembers = [];

function writeToFile(fileName, data) {
    fs.writeFile(`./${fileName}`, data, err => {
        if (err) throw err;

        console.log('teamHTML')
    })

}


function intern() {
    inquirer.prompt([{
        type: "input",
        name: "internName",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "internEmail",
        message: "What is your email?"
    },
    {
        type: "input",
        name: "internSchool",
        message: "What School do you attend?"
    },
    {
        type: "input",
        name: "internID",
        message: "What is your ID?"
    },
    ]).then(answers => {
       const intern = new Intern (answers.internName, answers.internEmail, answers.internSchool, answers.internID)

       teamMembers.push(answers)
    })
}

function engineer() {
    inquirer.prompt([{
        type: "input",
        name: "engineerName",
        message: "What is your name?"
    }, {
        type: "input",
        name: "engineerEmail",
        message: "What is your email?"
    }, {
        type: "input",
        name: "engineerGithub",
        message: "What is your Github username?"
    }, {
        type: "input",
        name: "engineerID",
        message: "What is your ID?"
    },
    ]).then(answers =>{
        const engineer = new Engineer (answers.engineerName, answers.engineerEmail, answers.engineerGithub, answers.engineerID);

        teamMembers.push(answers);
    })
}



function init() {
    inquirer.prompt([{
        type: "input",
        name: "managerName",
        message: "Who is your team manager?"

    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?",


    }, {
        type: "input",
        name: "managerId",
        message: "what is your manager's ID?"
    },
    {
        type: "input",
        name: "managerEmail",
        message: "what is your manager's email?"

    },
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.officeNumber)

        teamMembers.push(managers)
        console.log(answers)
        // var templateData = generateHTML(answers);
        // console.log(templateData)

        // writeToFile('HTMLfile', templateData)
    })
}

init();
