/*Type annotations help to enforce the datatypes for functions or variables
 calling the greeter function with anything other than a string throws an error during compilation*/
function greeter(person) {
    return "Hello, " + person;
}
var user = "Jane User";
document.body.innerHTML = greeter(user);

//Using Typescript makes writing classes a lot more intuitive
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
