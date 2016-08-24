var express = require("express"),
    app = express(),
    http = require("http"),
    path = require("path"),
    port = process.argv[2];

app.set("views", path.join(__dirname,'template') );
app.set("view engine","jade");


app.get("/home",function(req,res){
    res.render('index',{ date: new Date().toDateString() });
});

http
    .createServer(app)
    .listen(Number(port));
