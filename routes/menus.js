var express = require('express');
var router = express.Router();
const menusCtrl = require('../controllers/menus');

/* Menu Routes */
router.post('/cafeterias/:id/menus', menusCtrl.create)
router.put('/menus/:cid/:mid', menusCtrl.update)
router.delete('/menus/:id', menusCtrl.delete)

module.exports = router;