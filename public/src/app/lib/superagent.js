var superagent = require('superagent');
var debug = require('debug')('game:lib:superagent');

var config = require('../config/application');
var environmentConfig = require('../config/environment');

superagent.Request.prototype.promise = function() {
  return new Promise(function(resolve, reject) {
    if (this.method !== 'GET') this.type('json');
    if (this.method !== 'DELETE') this.accept('json');

    if (this.url.charAt(0) === '/') {
      this.url = environmentConfig[config.environment].api.root + this.url;
    }

    this.end(function(err, res) {
      if (err) {
        debug('error %o', err);
        return reject(err);
      }
      if (res.error) {
        debug('response with error %o', res);
        return reject(res);
      }

      resolve(res.body);
    });
  }.bind(this));
};

module.exports = superagent;
