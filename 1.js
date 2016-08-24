var port = process.argv[2];
var express = require("express");
var http = require("http");

var app = express();
// console.log("port:"+port);
app.get("/home",function(req,res){
    // console.log("access /home");
    // res.writeHeader("Content-Type","text/plain");
    res.end("Hello World!");
});

http
    .createServer(app)
    .listen(Number(port || 3000));
