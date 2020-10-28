var express = require('express');
var router = express.Router();
const cafeCtrl = require('../controllers/cafeterias')

/* GET cafeterias page. */
router.get('/', cafeCtrl.index);
router.get('/:id', cafeCtrl.show);
router.post('/', cafeCtrl.create);
router.put('/:id', cafeCtrl.update)
router.delete('/:id', cafeCtrl.delete);

module.exports = router;