var express = require('express');
var router = express.Router();
const passport = require('passport');
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

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
    'google',
    { scope: ['profile', 'email'] }
  ));
  
  // Google OAuth callback route
  router.get('/oauth2callback', passport.authenticate(
    'google',
    {
      successRedirect : '/',
      failureRedirect : '/'
    }
  ));
  
  // OAuth logout route
  router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });

module.exports = router;