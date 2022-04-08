var express = require('express');
var router = express.Router();
const helper = require('../routeFuntions');

/* GET users listing. */
router.post('/', function (req, res, next) {
    helper.createPerson(req, res);
});

module.exports = router;
