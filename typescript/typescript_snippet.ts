/*Type annotations help to enforce the datatypes for functions or variables
 calling the greeter function with anything other than a string throws an error during compilation*/

function greeter(person: string) {
    return "Hello, " + person;
}

var user = "Jane User";

document.body.innerHTML = greeter(user);


//Using Typescript makes writing classes a lot more intuitive
class Greeter {
    greeting: string;
    constructor (message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}