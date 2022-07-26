var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var  year = 2022;
  var sinhvien = ['Alex','Tom','Ana','Peter','David']

  res.render('index', { title: 'Express',
    nam : year,
    students : sinhvien
  });
});

router.get('/news',function (req, res) {
  res.render('news');
})
module.exports = router;
