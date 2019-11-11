var mongoose = require('mongoose');

var demoSch = new mongoose.Schema({
    username: String,
    address: String

});

module.exports = mongoose.model('demo', demoSch);
