// Generated by CoffeeScript 1.6.2
(function() {
  module.exports = {
    source: 'iced',
    target: 'js',
    compile: function(code, options, callback) {
      var coffee, err;

      try {
        coffee = require('iced-coffee-script');
        return callback(null, coffee.compile(code.toString('utf8'), {
          filename: options.filename
        }));
      } catch (_error) {
        err = _error;
        return callback(err);
      }
    }
  };

}).call(this);
