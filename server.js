// localhost:3000で表示を確認
// const http = require('http');
// const server = http.createServer((req, res) => {
//   res.write('hello world from node.js');
//   res.end();
// });

// server.listen('3000');

//ドメインの使い分け
const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello world from node.js');
    res.end();
  } else {
    res.write('using some other domain');
    res.end();
  }
});

server.listen('3000');

//1:18:16からスタート
// https://www.youtube.com/watch?v=RLtyhwFtXQA
