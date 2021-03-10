// const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { prompt } = require("inquirer");
const path = require("path");
const fs = require("fs");
let employee = []



const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


const mainMenu = async () => {
  await employees()
}

const employees = () => {
  prompt({
    type: 'list',
    name: 'role',
    message: 'Please select your role',
    choices: ['Engineer', 'Intern', 'Manager']
  })
    .then(({ role }) => {
      if (role === 'Engineer') {
        prompt([{
          type: 'input',
          name: 'name',
          message: 'What is your name?'
        }, {
          type: 'input',
          name: 'id',
          message: 'What is your employee ID?'
        }, {
          type: 'input',
          name: 'email',
          message: 'What is your email?'
        }, {
          type: 'input',
          name: 'github',
          message: 'What is your github user name?'
        }, {
          type: 'confirm',
          name: 'another',
          message: 'Would you like to add another Employee?'
        }
        ])
          .then((res) => {
            let person = new Engineer(res.name, res.id, res.email, res.github)
            employee.push(person)
            if (res.another) {
              mainMenu()
            } else {
              fs.writeFile(outputPath, render(employee), err => {
                if (err) { console.log(err) }
              })
            }
          })
      }
      if (role === 'Intern') {
        prompt([{
          type: 'input',
          name: 'name',
          message: 'What is your name?'
        }, {
          type: 'input',
          name: 'id',
          message: 'What is your employee ID?'
        }, {
          type: 'input',
          name: 'email',
          message: 'What is your email?'
        }, {
          type: 'input',
          name: 'school',
          message: 'What school did you attend?'
        }, {
          type: 'confirm',
          name: 'another',
          message: 'Would you like to add another employee?'
        }
        ])
          .then((res) => {
            let person = new Intern(res.name, res.id, res.email, res.school)
            employee.push(person)
            if (res.another) {
              mainMenu()
            } else {
              fs.writeFile(outputPath, render(employee), err => {
                if (err) { console.log(err) }
              })
            }
          })
      }
      if (role === 'Manager') {
        prompt([{
          type: 'input',
          name: 'name',
          message: 'What is your name?'
        }, {
          type: 'input',
          name: 'id',
          message: 'What is your employee ID?'
        }, {
          type: 'input',
          name: 'email',
          message: 'What is your email?'
        }, {
          type: 'input',
          name: 'officeNumber',
          message: 'What is your office number?'
        }, {
          type: 'confirm',
          name: 'another',
          message: 'Would you like to add another employee?'
        }
        ])
          .then((res) => {
            let person = new Manager(res.name, res.id, res.email, res.officeNumber)
            employee.push(person)
            if (res.another) {
              mainMenu()
            } else {
              fs.writeFile(outputPath, render(employee), err => {
                if (err) { console.log(err) }
              })
            }
          })
      }
    })
    .catch(err => console.log(err))

}

mainMenu()



// 


  // Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
