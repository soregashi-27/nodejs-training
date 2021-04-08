// const sum = (num1, num2) => num1 + num2;
// const PI = 3.14;

// class SomeMathObject {
//   constructor() {
//     console.log('Object Created');
//   }
// }

// module.exports.sum = sum;
// module.exports.PI = PI;
// module.exports.SomeMathObject = SomeMathObject;

// module.exports = { sum: sum, PI: PI, SomeMathObject: SomeMathObject };

// ----------------

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', (num1, num2) => {
  console.log('Turotial event has occured.');
  console.log(num1 + num2);
});

eventEmitter.emit('tutorial', 1, 2);

class Person extends EventEmitter {
  constructor(name) {
    super();
    this._name = name;
  }

  get name() {
    return this._name;
  }
}

let pedro = new Person('Pedro');
let chirstina = new Person('Christina');
pedro.on('name', () => {
  console.log('My name is ' + pedro.name);
});

pedro.emit('name');

chirstina.on('name', () => {
  console.log('My name is ' + chirstina.name);
});

chirstina.emit('name');

// ----------------

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let num61 = Math.floor(Math.random() * 10 + 1);
let num62 = Math.floor(Math.random() * 10 + 1);
let answer = num61 + num62;

//TODO: rl.questionの.questionの役割調べる
rl.question(`what is ${num61} + ${num62}? \n`, (userInput) => {
  console.log(userInput);
  if (userInput.trim() == answer) {
    rl.close();
  } else {
    rl.setPrompt('Incorrect response. Please try again\n');
    rl.prompt();
    rl.on('line', (userInput) => {
      if (userInput.trim() == answer) rl.close();
      else {
        rl.setPrompt(
          `Your answer of ${userInput} is incorrect!\ntry again please.\n`,
          rl.prompt()
        );
      }
    });
  }
});

//TODO: onメソッドについて調べる
rl.on('close', () => {
  console.log('correct!!!!');
});

//33:54~
//https://www.youtube.com/watch?v=RLtyhwFtXQA
