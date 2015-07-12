var express = require('express');
var router = express.Router();
var fs = require('fs');
var config = require('../config.json');
// GET /
router.get('/', function(req, res) {
  res.render('index', {routes:config.routes});
});

console.log(config.routes);
config.routes.forEach(function(route){
	console.log('ROUTE: ' + route.get + " | " + route.dir);
	
	router.get(route.get, function(req, res){
		fs.readdir(route.dir, function(err, files){
			if(err){
				throw err;
			}
			
			res.render('list', {files:files, get:"http://"+req.headers.host+route.get, dir:route.dir});
		});
	});
});

module.exports = router;
