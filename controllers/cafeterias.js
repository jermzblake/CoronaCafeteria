const Cafeteria = require('../models/cafeteria');

module.exports = {
    index
}

function index(req, res, next) {
    res.render('index', { title: 'Cafeteria Index' });
  };