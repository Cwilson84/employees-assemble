const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

const employeeArr = [];

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "employee",
        message: "Add an engineer, an intern or finish building my team?",
        choices: ["Engineer", "Intern", "Assemble Team"],
      },
    ])
    .then((val) => {
      if (val.employee === "Engineer") {
        addEngineer();
      } else if (val.employee === "Intern") {
        addIntern();
      } else {
        generateTeamFile();
      }
    });
}

function addManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter manager's name: ",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter manager's id: ",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter manager's Email address: ",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please enter mnager's office number: ",
      },
    ])
    .then((val) => {
      const manager = new Manager(
        val.name,
        val.id,
        val.email,
        val.officeNumber
      );
      console.table(manager);
      employeeArr.push(manager);
      addEmployee();
    });
}

function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter engineer's name: ",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter engineer's id: ",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter engineer's Email: ",
      },
      {
        type: "input",
        name: "gitHub",
        message: "Please enter engineer's gitHub: ",
      },
    ])
    .then((val) => {
      const engineer = new Engineer(val.name, val.id, val.email, val.gitHub);
      console.table(engineer);
      employeeArr.push(engineer);
      addEmployee();
    });
}

function addIntern () {
    inquirer
       .prompt([
            {
                type: 'input',
                name: 'name',
                message: "Please enter the intern's name: ",
            },
            {
                type: 'input',
                name: 'id',
                message: "Please enter the intern's id: ",
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter the intern's Email: ",
            },
            {
                type: 'input',
                name: 'school',
                message: "Please enter the intern's school: ",
            },
        ])
        .then((val) => {
            const engineer = new Intern(val.name, val.id, val.email, val.school);
            console.table(engineer);
            employeeArr.push(engineer);
            addEmployee();
        });
    };

    