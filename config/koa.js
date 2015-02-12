var router = require('koa-router');
var logger = require('koa-logger');
var compress = require('koa-compress');
var errorHandler = require('koa-error');
var responseTime = require('koa-response-time');
var bodyParser = require('koa-bodyparser');
var session = require('koa-session');
var cors = require('koa-cors');

module.exports = function(app) {
  app.use(cors());
  app.use(logger());
  app.use(errorHandler());

  app.use(bodyParser());
  app.use(session());

  app.use(compress());

  app.use(responseTime());

  app.use(router(app));
};
