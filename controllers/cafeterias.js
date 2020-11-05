const Cafeteria = require('../models/cafeteria');
const Member = require('../models/member');

module.exports = {
    index,
    show,
    create,
    delete: deleteOne,
    update
};

async function index(req, res, next) {
      // the user has submitted the search form or now
    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    // Default to sorting by name
    const cafeterias = await Cafeteria.find(modelQuery);
    const members = await Member.find({});
    res.render('cafeterias/index', { 
        title: 'Cafeteria Index',
        members,
        user: req.user,
        name: req.query.name,
        cafeterias,
    });
};

async function show(req, res, next) {
    const cafeteria = await Cafeteria.findById(req.params.id);
    const members = await Member.find({});
    res.render('cafeterias/show', {
        title: `Corona Cafeteria: ${cafeteria.name}`,
        members,
        user: req.user,
        name: req.query.name,
        cafeteria,
    });
}

async function create(req, res, next) {
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
        };
    })  
        const owner = await Member.findById(req.user.id)
        owner.cafeterias.push(est._id);  // should be querying the actual model (Member) using req.user as a parameter. Then pusing the info to the specific member model and saving (<membervariable>.save)
        owner.save(function(err){
            res.redirect(`/cafeterias/${est._id}`);
        });
};

async function deleteOne(req, res, next) {
    let cafeteria = await Cafeteria.findByIdAndRemove(req.params.id);
        res.redirect('/cafeterias');
};

function update(req, res, next) {
    // convert checkboxes of nothing or "on" to boolean
    req.body.dineIn = !!req.body.dineIn;
    req.body.delivery = !!req.body.delivery;
    req.body.takeout = !!req.body.takeout;
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    };
    console.log(req.body)
    Cafeteria.findByIdAndUpdate(req.params.id,
        req.body,
        {new: true},
        function(err, cafeteria){
            if (err) return res.status(500).send(err);
            res.redirect(`/cafeterias/${cafeteria._id}`);
        });
}