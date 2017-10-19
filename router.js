const Router = require('koa-router');
const router = new Router();
const productsController = require('./controllers/products');

router.get('/api/products', productsController.find);
router.post('/api/products', productsController.create);
router.delete('/api/products/:id', productsController.delete);

router.get('/api', async (ctx, next) => {
  ctx.body = 'Test route';
});

module.exports = router;
