const mongoose = require('mongoose');
const {Schema, model} = mongoose;

class AbstractSchema {
  getName() {
    return '';
  }

  getSchema() {
    return {};
  }

  registerTriggers() {}

  generateSchema() {
    const schema = new Schema(this.getSchema());

    this.registerTriggers(schema);

    return model(this.getName(), schema);
  }
}

module.exports = AbstractSchema;
