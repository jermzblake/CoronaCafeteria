const Cafeteria = require('../models/cafeteria');

module.exports = {
    create,
    delete: deleteOne
}

async function create(req, res, next){
    let cafeteria = await Cafeteria.findById(req.params.id)
    cafeteria.comments.push(req.body);
    cafeteria.save(function(err){
        res.redirect(`/cafeterias/${cafeteria._id}`);
    });
};

async function deleteOne(req, res, next) {
    let  cafeterias = await Cafeteria.find({'comments._id': req.params.id});
    let commentDoc = await cafeterias[0].comments.id(req.params.id).remove();
    console.log(commentDoc)
    cafeterias[0].save(function(err){
        res.redirect(`/cafeterias/${cafeterias[0]._id}`);
    });
};