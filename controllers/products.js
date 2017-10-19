const Product = require('../models/product');

exports.find = async function(ctx) {
  try {
    const result = await Product.find({});

    if (!result.length) {
      ctx.throw(404);
    }

    ctx.body = result;
  } catch (error) {
    if (error.name === 'NotFoundError') {
      ctx.throw(error);
    }

    ctx.throw(500);
  }
};

exports.create = async function(ctx) {
  const { name, colors } = ctx.request.body;

  const product = new Product({ name, colors });

  try {
    const result = await product.save();

    ctx.body = result;
  } catch (error) {
    if (error.name == 'ValidationError') {
      let errorMessages = [];

      for (let key in error.errors) {
        errorMessages.push(`${error.errors[key].message}`);
      }

      ctx.throw(400, errorMessages.join('; '));
    }

    ctx.throw(500);
  }
};

exports.delete = async function(ctx) {
  const { id } = ctx.params;

  try {
    const result = await Product.findByIdAndRemove(id);

    if (!result) {
      ctx.throw(404);
    }

    ctx.body = { message: 'Success' };
  } catch (error) {
    if (error.name === 'NotFoundError') {
      ctx.throw(error);
    }

    ctx.throw(500);
  }
};
