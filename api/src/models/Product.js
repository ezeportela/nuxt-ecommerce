const AbstractSchema = require('./AbstractSchema');

class Product extends AbstractSchema {
  getName() {
    return 'Product';
  }

  getSchema() {
    return {
      name: {
        type: String,
        required: 'Name is required',
      },
      description: {
        type: String,
        required: 'Description is required',
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      updatedAt: Date,
    };
  }

  registerTriggers(schema) {
    schema.pre('save', async (next) => {
      console.log(this);
      const product = this;
      product.updatedAt = new Date();
      console.log(product);
      next();
    });

    return schema;
  }
}

// schema.pre('findOneAndUpdate', async (next) => {
//   const {_update} = this;
//   _update.updatedAt = Date.now();
//   next();
// });

module.exports = new Product().generateSchema();
