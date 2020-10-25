const Cafeteria = require('../models/cafeteria');

module.exports = {
    index
}

function index(req, res, next) {
    res.render('cafeterias/index', { 
        title: 'Cafeteria Index',
        user: req.user,
        name: req.query.name,
    });
};