var mongoose = require('mongoose');

var loginSch = new mongoose.Schema({
    username: String,
    password: String,
    donor: Boolean,
    requester: Boolean

});

module.exports = mongoose.model('login', loginSch);
