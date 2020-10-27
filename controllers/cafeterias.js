const Cafeteria = require('../models/cafeteria');

module.exports = {
    index,
    show,
    create,

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

function create(req, res, next) {
    // convert checkboxes of nothing or "on" to boolean
    req.body.dineIn = !!req.body.dineIn;
    req.body.delivery = !!req.body.delivery;
    req.body.takeout = !!req.body.takeout;
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    };
    const est = new Cafeteria(req.body);
    est.save(function(err){
        if(err) {
        console.log(err);
        return res.redirect('/');
        }

        console.log(est);
        res.redirect(`/cafeterias/${est._id}`)
    });
};