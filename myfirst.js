var http = require('http'); //파이썬에서는 모듈을 불러올때 import 자바스크립트는 require

http.createServer(function (req, res) {  //function 이라는 함수를 받는 createServer 라는 함수
  //listen 전까지 function 함수          
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080); 