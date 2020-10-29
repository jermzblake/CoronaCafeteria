const mongoose = require('mongoose')
const Schema = mongoose.Schema

const memberSchema = new Schema ({
    name: String,
    email: String,
    avatar: String,
    googleId: String,
    cafeterias: [{type: Schema.Types.ObjectId, ref: 'Cafeteria' }],
    comments: [{type: Schema.Types.ObjectId, ref: 'Cafeteria' }],
}, {
    timestamps: true
});

module.exports = mongoose.model('Member', memberSchema)