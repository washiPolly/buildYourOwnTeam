// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        //validate 
        // if (!name) {
        //     throw new Error("You are missing the name");
        // }
        // if (!id) {
        //     throw new Error("You are missing an ID");
        // }
        // if (!email) {
        //     throw new Error("You are missing an email");
        // }



    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole(){
        return "Employee";
    }

    //method inside class
    // printInfo() {
    //     for (var key in this){
    //         console.log(`${key}: ${this[key]}`);
    //     }
    //     // console.log(`Name: ${this.name}`);
    //     // console.log(`ID: ${this.id}`);
    //     // console.log(`email: ${this.email}`);
    // }

}



// const jenny = new Employee("Jenny", 123, "jenny@blackpink.com");
// jenny.printInfo();
module.exports = Employee;