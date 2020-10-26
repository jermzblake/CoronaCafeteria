const Cafeteria = require('../models/cafeteria');

module.exports = {
    index
}

async function index(req, res, next) {
    const cafeterias = await Cafeteria.find({});
    res.render('cafeterias/index', { 
        title: 'Cafeteria Index',
        user: req.user,
        name: req.query.name,
        cafeterias
    });
};