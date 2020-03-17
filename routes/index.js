var express = require('express');
var router = express.Router();

const items = ['this', 'that'];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ msg: 'Home' });
});

router.get('/items', (req, res, next) => {
  console.log('hey');
  res.send({ msg: 'Success', data: items });
})

module.exports = router;
