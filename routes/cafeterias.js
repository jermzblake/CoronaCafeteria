var express = require('express');
var router = express.Router();
const cafeCtrl = require('../controllers')

/* GET cafeterias page. */
router.get('/', cafeCtrl.index);

module.exports = router;