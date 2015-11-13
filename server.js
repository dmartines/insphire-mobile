var express = require('express');
var app = express();

app.use(express.static(__dirname + '/www'));

var port = 8080;

app.listen(process.env.PORT || port);

//Server started
console.log("Server listenining on port " + port);