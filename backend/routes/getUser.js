var express = require('express');
var router = express.Router();
const helper = require('../routeFuntions');

router.get('/', (req, res) => {
    helper.getUserData(req, res);
});

module.exports = router;
