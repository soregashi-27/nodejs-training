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

// * Working with the file System Module
const fs = require('fs');

//*---ファイルの作成
// fs.writeFile('example.txt', 'This is an example', (err) => {
//   if (err) console.log(err);
//   else {
//     console.log('File successfully created');
//     fs.readFile('example.txt', 'utf8', (err, file) => {
//       if (err) console.log(err);
//       else console.log(file);
//     });
//   }
// });

//*---ファイルexample.txtの名前を変更する
// fs.rename('example.txt', 'example2.txt', (err) => {
//   if (err) console.log(err);
//   else console.log('successfully renamed the file');
// });

//*---appendFileメソッド
// fs.appendFile('example2.txt', 'Some data being appended', (err) => {
//   if (err) console.log(err);
//   else console.log('Successfully appended data to file');
// });

//*---unlinkメソッド ファイルを削除
// fs.unlink('example2.txt', (err) => {
//   if (err) console.log(err);
//   else console.log('Successfully deleted the file.');
// });

//*---ディレクトリを作成 mkdirメソッド
// const fs127 = require('fs');
// fs127.mkdir('tutorial', (err) => {
//   if (err) console.log(err);
//   else {
//     console.log('folder successfully created');
//   }
// });

//*---ディレクトリを削除 rmdirメソッド
// const fs135 = require('fs');
// fs135.mkdir('tutorial2', (err) => {
//   if (err) console.log(err);
//   else {
//     fs.rmdir('tutorial2', (err) => {
//       if (err) console.log(err);
//       else {
//         console.log('Successfully deleted the folder');
//       }
//     });
//   }
// });

//*---ディレクトリ、テキストファイルを作成
// const fs149 = require('fs');
// fs149.mkdir('tutorial', (err) => {
//   if (err) console.log(err);
//   else {
//     fs149.writeFile('./tutorial/example.txt', '123', (err) => {
//       if (err) console.log(err);
//       else {
//         console.log('Successfully created file');
//       }
//     });
//   }
// });

//*---上で作成したディレクトリ内のテキストファイルを削除
// fs149.unlink('./tutorial/example.txt', (err) => {
//   if (err) console.log(err);
//   else {
//     console.log('Deleted folder');
//   }
// });

//*---上で作成したディレクトリを削除
// fs149.rmdir('tutorial', (err) => {
//   if (err) console.log(err);
//   else {
//     console.log('Deleted folder');
//   }
// });

//記述例
// const fs179 = require('fs');
// fs179.readdir('example', (err, files) => {
//   if (err) console.log(err);
//   else {
//     for (let file of files) {
//       fs179.unlink('./example/' + file, (err) => {
//         if (err) console.log(err);
//         else {
//           console.log('Successfully deleted file');
//         }
//       });
//     }
//   }
// });

//*---CreateReadStreamメソッド、writeStreamメソッド
// const fs197 = require('fs');
// const readStream = fs197.createReadStream('example.txt', 'utf8');
// const writeStream = fs197.createWriteStream('example2.txt');
// readStream.on('data', (chunk) => {
//   writeStream.write(chunk);
// });

// const fs203 = require('fs');
// fs203.readFile('./largefile.txt', (err, file) => {
//   if (err) console.log(err);
//   else {
//     console.log(file);
//   }
// });

const fs211 = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();
const readStream = fs211.createReadStream('./example.txt', 'utf8');
const writeStream = fs211.createWriteStream('example2.txt');
readStream.pipe(gzip).pipe(writeStream);
