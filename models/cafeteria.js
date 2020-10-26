const mongoose = require('mongoose')
const Schema = mongoose.Schema

const menuSchema = new Schema({
    food: {type: Array},
    drink: {type: Array}
});

const commentSchema = new Schema({
    liUser: {type: String},
    content: {type: String}
}, {
    timestamps: true
});

const cafeteriaSchema = new Schema({
    name: {type: String, required: true},
    location: {type: String},
    dineIn: {type: Boolean, required: true},
    capacity: {type: Number, min: 0},
    delivery: {type: Boolean, required: true},
    takeout: {type: Boolean, required: true},
    info: {type: String},
    menu: [menuSchema], // embedding menu schema
    comments: [commentSchema], //embedding comment schema
    image: {type: String}
}, {
    timestamps: true
});

module.exports = mongoose.model('Cafeteria', cafeteriaSchema);