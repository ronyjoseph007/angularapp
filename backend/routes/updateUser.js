var express = require('express');
var router = express.Router();

const helper = require('../routeFuntions');

router.put('/', (req, res) => {
    console.log('ronyny');
    helper.updateUser(req, res);
});

module.exports = router;
