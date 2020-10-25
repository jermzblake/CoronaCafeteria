require('dotenv').config();
require('./config/database');
const Cafeteria = require('./models/cafeteria');


// Cafeteria.create({
//     name: 'Test Kitchen',
//     location: '123 Street Road',
//     dineIn: true,
//     capacity: 17,
//     delivery: false,
//     takeout: true,
//     info: 'Wear a mask!',
//     menu: ['breakfast sandwich']
// }, function(err, doc) {
//     if(err) return err;
//     console.log(doc);
// })

let g = new Cafeteria ({
    name: 'Green Kitchen',
    location: '123 Lambeau Road',
    dineIn: true,
    capacity: 28,
    delivery: true,
    takeout: true,
    info: 'Wear a mask!',
    menu: {food: {item:'turkey club', price:12}, drink: {item:'beer', price:4}}
})

g.save()