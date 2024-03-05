const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String
})

const Usermodels = mongoose.model('user', userSchema);

module.exports = Usermodels;