const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema ({
    fname: {type: String, required: true},
    lname: {type: String, required: true},
    email: {type: String, required: true},
    number: {type: Number, required: true},
    address: {type: String, required: true},
    photo: {type: String, required: true}
})

const User = mongoose.model('user', userSchema);

module.exports = User;