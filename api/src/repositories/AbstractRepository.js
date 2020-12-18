class AbstractRepository {
  getAll() {
    return this.getModel().find({});
  }

  create(data) {
    const model = this.newModel(data);
    return model.save();
  }
}

module.exports = AbstractRepository;
