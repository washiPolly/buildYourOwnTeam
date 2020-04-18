const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require("util");

const OUTPUT_DIR = path.resolve(__dirname, "output");

const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

const writeFileAsync = util.promisify(fs.writeFile);

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
let teamMember = [];

function createTeam(){




function addManager () {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name",
        },
        {
            type: "input",
            name: "id",
            message: "What is your ID",
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is your Office Number",
        },
    ])
    .then(answers => {
        let newManager = new Manager(answers.name, answers.id, answers.email, answers.offceNumber);
        teamMember.push(newManager);
        addTeam ();
    }) 

    
}


function addTeam () {
    inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Enter the Employee Role",
            choices: ["Engineer", "Intern", "I don't wan't to add anyone else"],
            
        },
       
    ])
    .then (newMember => {
        switch(newMember.role) {
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            case  "I don't wan't to add anyone else":
                init();
                console.log("Succesfully wrote to team.html");
                break;

        }
    })
    
}


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
// for the provided `render` function to work!```



function addEngineer(){
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the Engineer's name",
        },
        {
            type: "input",
            name: "id",
            message: "What is the Engineer's ID",
        },
        {
            type: "input",
            name: "email",
            message: "What is the Engineer's email address",
        },
        {
            type: "input",
            name: "github",
            message: "What is the Engineer's GitHub Username",
        },
    ])
    
    .then(answers => {
        let newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        teamMember.push(newEngineer);
        addTeam ();
    }) 
}


function addIntern(){
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the Intern's name",
        },
        {
            type: "input",
            name: "id",
            message: "What is the Intern's ID",
        },
        {
            type: "input",
            name: "email",
            message: "What is the Intern's email address",
        },
        {
            type: "input",
            name: "school",
            message: "What is the Intern's school",
        },
    ])

    .then(answers => {
        let newIntern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamMember.push(newIntern);
        addTeam ();
    }) 

}


function init() {
    {
        
        writeFileAsync("team.html", render(teamMember));
 
}
}
addManager();

}
createTeam();