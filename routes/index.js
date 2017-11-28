var express = require('express');
var router = express.Router();

/* GET home page. */
router.all('/set', function(req, res, next) {
  res.send({'id':'1'});
});

module.exports = router;
