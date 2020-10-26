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
    name: 'Blue Kitchen',
    location: '1 Holmgren Way',
    dineIn: true,
    capacity: 18,
    delivery: true,
    takeout: true,
    info: 'Wear a mask!',
    menu: {food: {item:'breakfast sandwich', price:6}, drink: {item:'water', price:1}}
})

g.save()