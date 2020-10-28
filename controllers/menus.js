const Cafeteria = require('../models/cafeteria');

module.exports = {
    create,
    delete: deleteOne,
    update
}

async function create(req, res, next){
    let cafeteria = await Cafeteria.findById(req.params.id)
    cafeteria.menu.push(req.body);
    cafeteria.save(function(err){
        res.redirect(`/cafeterias/${cafeteria._id}`);
    });
};

async function deleteOne(req, res, next) {
    let  cafeterias = await Cafeteria.find({'menu._id': req.params.id});
    cafeterias[0].menu.id(req.params.id).remove();
    cafeterias[0].save(function(err){
        res.redirect(`/cafeterias/${cafeterias[0]._id}`);
    });
};

async function update(req, res, next) {
    let cafeteria = await Cafeteria.findById(req.params.cid);
    let menu = await cafeteria.menu.id(req.params.mid);
    console.log(req.body)
    menu.item = req.body;
    console.log(menu.item)
    menu.price = req.body;
    menu.description = req.body;
    cafeteria.save(function(err){
            res.redirect(`/cafeterias/${cafeteria._id}`);
        });
}