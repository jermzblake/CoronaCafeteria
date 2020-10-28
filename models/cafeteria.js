const mongoose = require('mongoose')
const Schema = mongoose.Schema

const menuSchema = new Schema({
    item: {type: String},
    description: {type: String},
    price: {type: Number, min: 0, default: 0.99}
});

const commentSchema = new Schema({
    liUser: {type: String},
    content: {type: String, minlength: 3},
    rating: {type: Number, max: 5}
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