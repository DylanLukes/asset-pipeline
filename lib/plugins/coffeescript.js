// Generated by CoffeeScript 1.6.2
(function() {
  var try_require;

  try_require = function(mod) {
    var err, result;

    try {
      result = require(mod);
    } catch (_error) {
      err = _error;
      result = null;
    }
    return result;
  };

  module.exports = {
    source: 'coffee',
    target: 'js',
    compile: function(code, options, callback) {
      var coffee, err;

      try {
        coffee = null;
        if (coffee == null) {
          coffee = try_require('coffee-script');
        }
        if (coffee == null) {
          coffee = try_require('iced-coffee-script');
        }
        if (coffee == null) {
          throw new Error('could not find any coffee');
        }
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
