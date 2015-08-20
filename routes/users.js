var express = require('express');
var router = express.Router();


router.use(function timeLog(req,res,next){
	console.log('Time: ',Date.now());
	next();
});

router.get('/:user_id',function(req,res){
	res.send('Works fine in here');
});

router.put('/:user_id',function(req,res){
	res.send('Got a PUT request at /user');
});

router.post('/',function(req,res){
	res.send('Got a POST request');
});

router.delete('/:user_id',function(req,res){
	res.send('Got a DELETE request');
});

module.exports = router;