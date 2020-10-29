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
    console.log(menu)
    //to remove the empty action field that is created in req.body
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    };
    // to remove [Object: null prototype]
    const obj = JSON.parse(JSON.stringify(req.body));
    menu = obj;
    console.log(menu)
    try{
    await cafeteria.save();
    } catch (err) {
        console.log(err);
    }
        res.redirect(`/cafeterias/${cafeteria._id}`);
}