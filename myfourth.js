
var app = require('http').createServer(myServer); // myServer는 함수
var fs = require('fs');
var url = require('url');

function myServer(req, res){
    var path = url.parse(req.url).pathname; 
    var query_str = url.parse(req.url).pathname;

    if(query_str){
        var qdata = url.parse(req.url, true).query;
        console.log(qdata.firstname); 
    }
    var fsCallback = function(error, data){
        if(error) throw error;

        res.writeHead(200);
        res.write(data);
        res.end();
    }
    if (path == '/favicon.ico') {
    }else {
       if (path == '/') {
           fs.readFile(__dirname + '/index.html', fsCallback);
       } else {
           fs.readFile(__dirname + path, fsCallback);
       } 
    }
 
}
app.listen(9000);