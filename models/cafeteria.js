const mongoose = require('mongoose')
const Schema = mongoose.Schema

const menuSchema = new Schema({
    food: {type: Array},
    drink: {type: Array}
});

const commentSchema = new Schema({
    liUser: {type: String},
    content: {type: String},
    rating: {type: Number}
}, {
    timestamps: true
});

const cafeteriaSchema = new Schema({
    name: {type: String, required: true},
    location: {type: String},
    dineIn: {type: Boolean, },
    capacity: {type: Number, min: 0},
    delivery: {type: Boolean, },
    takeout: {type: Boolean, },
    info: {type: String, required: true},
    menu: [menuSchema], // embedding menu schema
    comments: [commentSchema], //embedding comment schema
    image: {type: String, default:'/images/masked-curbside-pickup.jpg'}
}, {
    timestamps: true
});

module.exports = mongoose.model('Cafeteria', cafeteriaSchema);