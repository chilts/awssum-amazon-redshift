var util = require('util');

module.exports = exports = function(data) {
    console.log(util.inspect(data, false, null, true));
}
