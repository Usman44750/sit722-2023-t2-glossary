var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SIT 722 DevOps Glossary' , });
});

module.exports = router;
