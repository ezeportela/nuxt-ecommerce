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
    schema.pre('save', async function () {
      this.set({updatedAt: new Date()});
    });

    schema.pre('findOneAndUpdate', async function () {
      this.set({updatedAt: new Date()});
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
