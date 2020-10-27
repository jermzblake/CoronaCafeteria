const Cafeteria = require('../models/cafeteria');

module.exports = {
    create,
}

async function create(req, res, next){
    let cafeteria = await Cafeteria.findById(req.params.id)
    cafeteria.comments.push(req.body);
    cafeteria.save(function(err){
        res.redirect(`/cafeterias/${cafeteria._id}`);
    });
}