var passport = require('koa-passport');

var oauth2 = require('./middlewares/oauth2');
var heroesController = require('../app/controllers/heroes');

module.exports = function(app) {
  app.post('/heroes', heroesController.create);

  app.get('/heroes/me',
    passport.authenticate('bearer', { session: false }),
    heroesController.show
  );

  app.post('/oauth/token', oauth2.token);
};
