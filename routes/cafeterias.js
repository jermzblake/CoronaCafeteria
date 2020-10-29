var express = require('express');
var router = express.Router();
const passport = require('passport');
const cafeCtrl = require('../controllers/cafeterias');

/* GET cafeterias page. */
router.get('/', cafeCtrl.index);
router.get('/:id', cafeCtrl.show);
router.post('/', cafeCtrl.create);
router.put('/:id', cafeCtrl.update)
router.delete('/:id', cafeCtrl.delete);

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