const Cafeteria = require('../models/cafeteria');

module.exports = {
    create,
    delete: deleteOne
}

async function create(req, res, next){
    let cafeteria = await Cafeteria.findById(req.params.id)
    let comment = cafeteria.comments.push(req.body);
    cafeteria.save();
        req.user.comments.push(cafeteria._id)
        req.user.save(function(err){
            res.redirect(`/cafeterias/${cafeteria._id}`);
        });
};

async function deleteOne(req, res, next) {
    let  cafeteria = await Cafeteria.findOne({'comments._id': req.params.id});
    let commentDoc = await cafeteria.comments.id(req.params.id).remove();
    cafeteria.save(function(err){
        res.redirect(`/cafeterias/${cafeteria._id}`);
    });
};