var stylus = require("stylus"),
    express = require("express"),
    app = express(),
    http = require("http"),
    path = require("path"),
    fs = require("fs"),
    dir = process.argv[3],
    port = process.argv[2];

dir = dir ? dir : path.join( __dirname,'template');

app.set("views", dir);
app.set("view engine","jade");

app.use( stylus.middleware( dir ) );

app.get("/", (req,res)=>{
        res.render("5");
});
app.get("/main.css",(req,res)=>{
    var styleFile = fs.createReadStream( path.join( dir,"main.css") );
    styleFile.pipe(res);
});
// app.use( express.static( dir) );


http.createServer(app).listen(Number(port|| 3000));
