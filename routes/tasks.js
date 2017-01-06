var express = require("express");
var router = express.Router();
var mongojs = require('mongojs');

var db = mongojs('mongodb://noeld:m123456@ds163397.mlab.com:63397/dbnoel',['tasks']);

router.get('/tasks',function(req,res,next){
    // res.send('TAKS APIs');
    db.tasks.find(function(err,tasks){
    	if(err){
    		res.send(err);
    	}
    	res.json(tasks);
    });
});

module.exports = router; 