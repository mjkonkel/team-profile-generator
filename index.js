// required packages
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template')
const Manager = require('./lib/Manager')
const team = []
// array of questions for inquirer
const questions = [
    {
        type: 'input',
        name: 'managerName',
        message: "What is the team manager's name?",
    },
    {
        type: 'input',
        name: 'managerID',
        message: "What is the team manager's ID?",
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "What is the team manager's email address?",
    },
    {
        type: 'input',
        name: 'managerOffice',
        message: "What is the team manager's office number?",
    },
]

const menuQuestion = {
    type: 'list',
    message: 'What type of employee would you like to add?',
    name: 'employeeType',
    choices: ['Engineer', 'Intern', "I don't want to add any more team members"],
}

// function to write the html file
function writeToFile() {
    fs.writeFileSync('./dist/team.html', generatePage(team))
}

// function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            const manager = new Manager(data.managerName, data.managerID, data.managerEmail, data.managerOffice)
            team.push(manager)
            console.log(team)
        }).then(() => menu())
}

function menu() {
    inquirer
        .prompt(menuQuestion)
        .then((data) => {

        })
}

// function call to initialize app
init();