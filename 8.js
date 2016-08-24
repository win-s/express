var express = require('express'),
    port = process.argv[2],
    file = process.argv[3],
    fs = require('fs'),
    app = express();
// console.log("filename:"+file);
// console.log("port:"+port);
app.get("/books", (req,res)=>{
    fs.readFile(file,(err,data)=>{
        if(err)res.sendStatus(500);

        try{var json = JSON.parse( data );}
        catch(e){
            res.sendStatus(500);
        }
        res.json(json);
    });
});
app.get("/send", (req,res)=>{

    res.send({test:'win'});
});

app.get("/json",(req,res)=>{
    res.json({test:'win'});
});
app.get("/end",(req,res)=>{
    res.end( JSON.stringify({test:'win'}) );
});
app.listen( Number(port || 3000) );

// app.listen()
