// required packages
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const team = []

// questions for manager
const managerQuestion = [
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

// question for which type of team member
const menuQuestion = {
    type: 'list',
    message: 'What type of team member would you like to add?',
    name: 'employeeType',
    choices: ['Engineer', 'Intern', "I don't want to add any more team members"],
}

// questions for engineer
const engineerQuestion = [
    {
        type: 'input',
        name: 'engineerName',
        message: "What is the engineer's name?",
    },
    {
        type: 'input',
        name: 'engineerID',
        message: "What is the engineer's ID?",
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: "What is the engineer's email address?",
    },
    {
        type: 'input',
        name: 'engineerGitHub',
        message: "What is the engineer's GitHub username?",
    },
]

// questions for intern
const internQuestion = [
    {
        type: 'input',
        name: 'internName',
        message: "What is the intern's name?",
    },
    {
        type: 'input',
        name: 'internID',
        message: "What is the intern's ID?",
    },
    {
        type: 'input',
        name: 'internEmail',
        message: "What is the intern's email address?",
    },
    {
        type: 'input',
        name: 'internSchool',
        message: "What is the intern's school?",
    },
]

// function to write the html file
function writeToFile() {
    console.log(team)
    fs.writeFileSync('./dist/team.html', generatePage(team))
}

// function to initialize app and show manager questions
function init() {
    inquirer
        .prompt(managerQuestion)
        .then((data) => {
            const manager = new Manager(data.managerName, data.managerID, data.managerEmail, data.managerOffice)
            team.push(manager)
            // console.log(team)
        }).then(() => menu())
}

// function for menu question
function menu() {
    inquirer
        .prompt(menuQuestion)
        .then((data) => {
            // if user selects engineer - go to engineer questions
            if (data.employeeType === 'Engineer') {
                engineer()
            }
            // if user selects inter - go to intern questions
            if (data.employeeType === 'Intern') {
                intern()
            }
            // if user selects no more team members - end inquirer and writeToFile()
            if (data.employeeType === "I don't want to add any more team members") {
                writeToFile()
                console.log(team)
            }
        })
}

// function to show engineer questions
function engineer() {
    inquirer
        .prompt(engineerQuestion)
        .then((data) => {
            const engineer = new Engineer(data.engineerName, data.engineerID, data.engineerEmail, data.engineerGitHub)
            team.push(engineer)
        }).then(() => menu())
}

// function to show intern questions
function intern() {
    inquirer
        .prompt(internQuestion)
        .then((data) => {
            const intern = new Intern(data.internName, data.internID, data.internEmail, data.internSchool)
            team.push(intern)
        }).then(() => menu())
}

// function call to initialize app
init();