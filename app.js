var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var port = 3000;

var app = express();

app.get('/',function(req,res){
   res.send('Test');
});

app.listen(port,function(){
    console.log("server started on port " + port);
});