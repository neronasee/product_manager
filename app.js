const Koa = require('koa');
const app = new Koa();

const middlewares = require('./middlewares');
middlewares.forEach(middleware => middleware.init(app));

const router = require('./router');

app.use(router.routes());

module.exports = app;
