/*Some of the key feature improvements of ES6 over ES5 include Template literals, classes, 
Arrow Functions, Modules, Block Scoping, and Promises. Some of these features are demonstrated below*/

//Template literals enable us write strings with embedded expressions easing string concatenation and update.
let insert = 'World';
console.log(`Hello ${insert}`)//outputs 'Hello World'

//An approximation of classes in ES5 could look somewhat like this (using constructor functions)
function Car( make ) { //approximate a class/constructor
   this.make = make;
   this.currentSpeed = 25;
    
   this.printCurrentSpeed = function(){
          console.log(this.make + ' is going ' + this.currentSpeed + ' mph.');
    }
}
 
// Instantiate a new car
var moderatelyPricedCar = new Car( "Kia");
moderatelyPricedCar.printCurrentSpeed();

/*ES6 introduces language support for classes (class keyword), constructors (constructor keyword), 
and the extend keyword for inheritance. Thereby making a developer's intentions more obvious*/


//The same implementation as the above can be written in ES6 as;
class Car {
    constructor(make) { //constructors
      this.make = make;
      this.currentSpeed = 25;
    }

    printCurrentSpeed(){
      console.log(this.make + ' is going ' + this.currentSpeed + ' mph.');
    }
}

class RaceCar extends Car { //inheritance
    constructor(make, topSpeed) {
        super(make); //call the parent constructor with super
        this.topSpeed = topSpeed;
    }

    goFast(){
          this.currentSpeed = this.topSpeed;
    }
}

let stang = new RaceCar('Mustang', 150);

stang.printCurrentSpeed();
stang.goFast();


/*In ES5, variables are either globally or locally function scoped. ES6 solves 
 the problem of block level scoping using the 'let' keyword thereby 
 making Javascript more intuitive for developers with backgrounds such as C#*/

var num = 0; //globally scoped

for (let i = 0; i < 10; i++) { //i is block scoped
  num += i;
  console.log('value of i in block: ' + i);
}

console.log('Is i defined here?: ' + (typeof i !== 'undefined')); //Is i defined here?: false 


/*Arrow functions have two major benefits as can be seen below. 
First is that they are less verbose than traditional function expressions
Second, their this is picked up from surroundings (lexical). Therefore, you don’t need bind() or that = this, anymore*/

//Traditional function expression
const squares = arr.map(function (x) {
 return x * x 
});

nums.forEach(function (v) {
   if (v % 5 === 0)
       fives.push(v);
});

//The same using arrow functions
const squares = arr.map(x => x * x);

nums.forEach(v => {
   if (v % 5 === 0)
       fives.push(v);
});


//lexical 'this'


/*To reference 'car' inside the 'setInterval' function, the 'this' keyword 
has to be preassigned to a variable or bound using the bind() method*/
function Car() {
  var self = this; //locally assign this that can be closed over
  self.speed = 0;

  setInterval(function goFaster() {
    //this has a different scope, but we can use the self variable to reference the parent "this"
    self.speed += 5;
      console.log('now going: ' + self.speed);
  }, 1000);
}

var car = new Car();

//In ES6, 'this' is lexical inside arrow functions (inner functions contain the scope of parent functions)
function Car() { //Note, we could use the new Class feature in ES6 instead
  this.speed = 0;

  setInterval(() => {
    this.speed += 5; //this is from Car
    console.log('now going: ' + this.speed);
  }, 1000);
}

/*The concept of promises aim to remove some of the problems associated with multi chaining callbacks
 which could lead to unreadable code, unclear error handling and other unwanted issues*/

/*playing games at a casino modelled with callbacks. The code is difficult to understand 
and the error messages are very repetitive*/
var amount= 1000;

getCasinoTokens(amount, function(tokens, err){
    if (err) complainToManager(err)
    playBlackjack(tokens*0.3, function(moreTokens, err){
        if (err) complainToManager(err)
        playRoulette(moreTokens*0.05, function(evenMoreTokens, err) {
            if (err) complainToManager(err)
            playPoker(evenMoreTokens*0.5, function(finalTokens, err){
                if (err) complainToManager(err)
                return finalTokens;
            })
        })
    })
})

/*The same code written using promises, where the 'then' method is called whene everything goes well 
and the 'catch' called when there has been an error, perhaps the player has run out of tokens. The code is so much easier 
to understand and is generally better formatted than the one above*/
var amount= 1000;

getCasinoTokens(1000)
.then(function(tokens){
    return playBlackjack(tokens*0.3)
})
.then(function(moreTokens){
    return playRoulette(moreTokens*0.05)
})
.then(function(evenMoreTokens){
    return playPoker(evenMoreTokens*0.5)
})
.catch(function(err){
    complainToManager(err)
    startDrinking()
})

//Using modules is much easier in ES6

//a module utility.js could be defined as such
function generateRandom() {
    return Math.random();
}

function sum(a, b) {
    return a + b;
}

export { generateRandom, sum }

//A javascripf file that consumes this module can be written as 
import { generateRandom, sum } from 'utility';

console.log(generateRandom()); //logs a random number
console.log(sum(1, 2)); //3