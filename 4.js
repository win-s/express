var express = require("express"),
    app = express(),
    port = process.argv[2],
    path = require("path"),
    http = require("http"),
    bodyparser = require('body-parser');

app.set("views", path.join(__dirname,'template') );
app.set("view engine","jade");

// app.use( function(req,res,next){
//     req.on( 'data', data=>{
//         console.log("raw:"+req.data);
//     } );
//     next();
// } );
app.use( bodyparser.urlencoded({'extended':false}) );

// app.post("/form",(req,res)=>{
//
//     res.render("form");
// });

app.post("/form",(req,res)=>{
    // console.log("/path str:"+ req.body.str );
    res.end( req.body.str.split('').reverse().join('') );
});

http.createServer(app).listen( Number( port || 3000 ) );
