var mongoose = require('mongoose');

module.exports = mongoose.model('game', {
    name: {type: String, required: true},
    description: {type: String, default: ''},
});
