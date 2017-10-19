const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: 'Name is required',
      validate: [
        {
          validator: function checkName(value) {
            return /^[a-zA-Z0-9]{4,8}$/.test(value);
          },
          msg: 'Please, provide a proper name (alphanum, min 4, max 8)',
        },
      ],
    },
    colors: {
      type: [
        {
          type: String,
          enum: {
            values: ['red', 'green', 'blue'],
            message: 'Unknown color',
          },
        },
      ],
      required: 'Colors are required',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Product', productSchema);
