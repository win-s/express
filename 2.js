var port = process.argv[2],
    dir = process.argv[3],
    express = require("express"),
    http = require("http"),
    path = require("path"),
    app = express();

app.use(express.static( dir || path.join(__dirname,'public') ));

http
    .createServer(app)
    .listen(Number(port));
