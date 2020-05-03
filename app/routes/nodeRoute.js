var express = require('express');
var router = express.Router();
var controller = require('../controller/nodeController');


router.get('/', controller.index);
router.get('/one', controller.test);

module.exports = router;