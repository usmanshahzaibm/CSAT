var express = require('express');
var app = express();
var port = (process.env.VCAP_APP_PORT || 3000);
var host = (process.env.VCAP_APP_HOST || 'localhost');

var server = app.listen(port,host);
/*
var server = app.listen(3000,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('We are now running at http://%s:%s',host,port);
});

*/
/*ROUTES START HERE*/
var user = require('./routes/users.js');

//BIND ROUTE TO APP
app.use('/user',user);

/*HOMEPAGE*/
app.get('/',function(req,res){
	res.send('Works fine in here');
});



/*app.put('/user',function(req,res){
	res.send('Got a PUT request at /user');
});

app.post('/',function(req,res){
	res.send('Got a POST request');
});

app.delete('/user',function(req,res){
	res.send('Got a DELETE request');
});*/