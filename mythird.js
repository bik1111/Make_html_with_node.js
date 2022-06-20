
var app = require('http').createServer(myServer); // myServer는 함수
var fs = require('fs');
var url = require('url');

function myServer(req, res){
    var path = url.parse(req.url).pathname; 
    var fsCallback = function(error, data){
        if(error) throw error;

        res.writeHead(200);
        res.write(data);
        res.end();
    }
    switch(path){
        case '/html1.html':
             fs.readFile(__dirname + '/html1.html', fsCallback);
             break;
        case '/html2.html':
             fs.readFile(__dirname + '/html2.html', fsCallback);
             break;
        case '/html3.html':
            fs.readFile(__dirname + '/html3.html', fsCallback);
            break;
        case '/html4.html':
            fs.readFile(__dirname + '/html4.html', fsCallback);
        default:
            fs.readFile(__dirname + '/index.html', fsCallback);
            break;

    }
}
app.listen(9000);