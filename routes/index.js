var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/reg', function(req, res, next) {
  res.render('secure/register', { title: 'Register' });
});

module.exports = router;
