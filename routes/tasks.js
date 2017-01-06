var express = require("express");
var router = express.Router();
var mongojs = require('mongojs');

var db = mongojs('mongodb://noeld:m123456@ds163397.mlab.com:63397/dbnoel',['tasks']);

// Get all tasks
router.get('/tasks',function(req,res,next){
    // res.send('TAKS APIs');
    db.tasks.find(function(err,tasks){
    	if(err){
    		res.send(err);
    	}
    	res.json(tasks);
    });
});

// Get single tasks
router.get('/task/:id',function(req,res,next){
    // res.send('TAKS APIs');
    db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)},function(err,task){
    	if(err){
    		res.send(err);
    	}
    	res.json(task);
    });
});

// Save tasks
router.post('/task',function(req,res,next){
	var task = request.body;
	if(!task.title || (task.isDone + '')){
		res.status(400);
		res.json({
			"error": "Bad Data"
		});
	}else {
		db.tasks.save(task, function(err,task){
		if(err){
    		res.send(err);
    	}
    	res.json(task);
		});
	}
});

// Delete tasks
router.delete('/task/:id',function(req,res,next){
    // res.send('TAKS APIs');
    db.tasks.remove({_id: mongojs.ObjectId(req.params.id)},function(err,task){
    	if(err){
    		res.send(err);
    	}
    	res.json(task);
    });
});

// Update task
router.put('/task/:id',function(req,res,next){
    var task = req.body;
    var updTask = {};

    if(task.isDone){
    	updTask.isDone = task.isDone;
    }

    if(task.title){
    	updTask.title = task.title;
    }

    if(!updTask){
    	res.status(400);
    	res.json({
    		"error": "Bad Data"
    	});
    }else{
    db.tasks.update({_id: mongojs.ObjectId(req.params.id)},function(err,task){
    	if(err){
    		res.send(err);
    	}
    	res.json(task);
    });
    }
    
});

module.exports = router; 