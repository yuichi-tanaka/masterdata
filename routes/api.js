var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:version/postcode', function(req, res) {
  console.log('version = ' + req.params.version);
  res.render('index', { title: 'MasterData' });
});

module.exports = router;
