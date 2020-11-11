let Filter = require('bad-words'),
    filter = new Filter();

module.exports.isProfane = function(s) {
    return filter.isProfane(s);
};