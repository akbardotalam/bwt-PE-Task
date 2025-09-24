var express = require('express');
var router = express.Router();
var os = require('os');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   setTimeout(() => {
//     throw new Error('something bad happened');
//   }, 0);
// });

router.get('/', function(req, res, next) {
setTimeout(() => {
  try {
    throw new Error('something bad happened');
  } catch (err) {
    next(err); 
  }
}, 0);
});

module.exports = router;
