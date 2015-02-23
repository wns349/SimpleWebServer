var express = require('express');
var router = express.Router();
var fs = require('fs');

// GET /
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/temp', function(req, res){
  fs.readdir('D:\\Temp\\', function (err, files){
    if(err){
      throw err;
    }
    
    res.render('temp', {files: files});
  });
});

module.exports = router;
