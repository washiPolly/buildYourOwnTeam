// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {

        // const name = "polly";
        // const id = 321;
        // const email = "polly@gmail.com"

        super(name, id, email);
        this.github = github;

    }

    getGithub() {
        return this.github;
    }

    getRole(){
        return "Engineer";
    }
}

// const engineer = new Engineer("polly", 321, "polly@g", "washiPolly");
// engineer.printInfo();

module.exports = Engineer;