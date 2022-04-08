var express = require('express');
var router = express.Router();
const helper = require('../routeFuntions');

/* GET home page. */
router.post('/', function (req, res, next) {
    helper.loginUser(req, res);
});

module.exports = router;
