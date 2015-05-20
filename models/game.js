var mongoose = require('mongoose');

module.exports = mongoose.model('game', {
    name: {type: String, default: ''}
});
