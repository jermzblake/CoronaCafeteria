var express = require('express');
var router = express.Router();
const commentsCtrl = require('../controllers/comments');

/* comments routes */
router.post('/cafeterias/:id/comments', commentsCtrl.create)
router.delete('/comments/:id', commentsCtrl.delete)

module.exports = router;