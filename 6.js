var express = require("express"),
    app = express(),
    http = require("http"),
    port = process.argv[2],
    crypto = require("crypto");
var id;
app.put("/message/:id",(req,res)=>{
    id = req.params.id;
    res.end(
        crypto
            .createHash('sha1')
            .update( new Date().toDateString() + id )
            .digest('hex')
    );
});

http.createServer(app).listen( Number(port || 3000) );
