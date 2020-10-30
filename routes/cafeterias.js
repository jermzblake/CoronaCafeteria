var express = require('express');
var router = express.Router();
const cafeCtrl = require('../controllers/cafeterias');

/* GET cafeterias page. */
router.get('/', cafeCtrl.index);
router.get('/:id', cafeCtrl.show);
router.post('/', isLoggedIn, cafeCtrl.create);
router.put('/:id', isLoggedIn, cafeCtrl.update)
router.delete('/:id', isLoggedIn, cafeCtrl.delete);

// Insert this middleware for routes that require a logged in user
function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;