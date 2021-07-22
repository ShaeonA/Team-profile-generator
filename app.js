const generateHTML = ("./utils/generateHTML")
const inq = require('inquirer')
const fs = require('fs')
const questions = [{
    type: "input",
    name: "manager",
    message: "Who is your team manager?"

}, {
    type: "input",
    name: "employeeID",
    message: "What's your employee ID?"
},
{
    type: "input",
    name: "email",
    message: "What is your email?"
},
{
    type: "input",
    name: "officeNumber",
    message: "What is your office number?",
  

},
{
    type: "list",
    name: "descriptions",
    message: "Please enter a description of your Project",
    choices: [
        'Engineer',
        'Intern',
        'Finish building your team',
    ]

},
{
    type: "input",
    name: "intern",
    message: "What is the interns email, github username, ID, and school?",
  

},
{
    type: "input",
    name: "engineer",
    message: "What is the engineers email, github username, ID, and school?",
  

},
];

function writeToFile(fileName, data) {
    fs.writeFile(`./${fileName}`, data, err => {
        if (err) throw err;

        console.log('teamHTML')
    })

}



function init() {
    inquirer.prompt(questions).then(answers => {
        console.log(answers)
        var templateData = generateHTML(answers);
        console.log(templateData)

        writeToFile('HTMLfile', templateData)
    })
}

init();
