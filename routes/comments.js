var express = require('express');
var router = express.Router();
const commentsCtrl = require('../controllers/comments');

/* comments routes */
router.post('/cafeterias/:id/comments', isLoggedIn, commentsCtrl.create)
router.delete('/comments/:id', isLoggedIn, commentsCtrl.delete)

// Insert this middleware for routes that require a logged in user
function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
    }

module.exports = router;