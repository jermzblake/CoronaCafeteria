const Cafeteria = require('../models/cafeteria');

module.exports = {
    index,
    show,

};

async function index(req, res, next) {
    const cafeterias = await Cafeteria.find({});
    res.render('cafeterias/index', { 
        title: 'Cafeteria Index',
        user: req.user,
        name: req.query.name,
        cafeterias
    });
};

async function show(req, res, next) {
    const cafeteria = await Cafeteria.findById(req.params.id);
    res.render('cafeterias/show', {
        title: 'Red Cafe',
        user: req.user,
        name: req.query.name,
        cafeteria,
    });
}