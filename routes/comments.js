var express = require('express');
var router = express.Router();
const commentsCtrl = require('../controllers/comments');

/* POST comments */
router.post('/cafeterias/:id/comments', commentsCtrl.create)

module.exports = router;