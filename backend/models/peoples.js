const mongoose = require('mongoose');

const peopleSchema = new mongoose.Schema({
    email: String,
    password: String,
    loggedin: { type: Boolean, default: false },
});

module.exports = mongoose.model('peoples', peopleSchema);
