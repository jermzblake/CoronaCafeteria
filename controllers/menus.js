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
    let  cafeteria = await Cafeteria.findOne({'menu._id': req.params.id});
    cafeteria.menu.id(req.params.id).remove();
    cafeteria.save(function(err){
        res.redirect(`/cafeterias/${cafeteria._id}`);
    });
};

async function update(req, res, next) {
    let cafeteria = await Cafeteria.findById(req.params.cid);
    let menu = await cafeteria.menu.id(req.params.mid);
    //to remove the empty action field that is created in req.body
    //and set menu keys to req.body keys (.save won't work w/o Object ID)
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
        menu[key] = req.body[key];
    };
    try{
    await cafeteria.save();
    } catch (err) {
        console.log(err);
    }
        res.redirect(`/cafeterias/${cafeteria._id}`);
}