var express = require('express'),
    app = express(),
    port = process.argv[2],
    http = require('http');

app.get("/search", (req,res)=>{
    res.send(req.query);    
});

http.createServer(app).listen( Number( port|| 3000 ) );
