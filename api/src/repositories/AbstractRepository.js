class AbstractRepository {
  getAll() {
    return this.getModel().find({});
  }

  getById(id) {
    return this.getModel().findById(id);
  }

  create(data) {
    const model = this.newModel(data);
    return model.save();
  }

  update(id, data) {
    return this.getModel().findByIdAndUpdate(id, data, (err) => {
      if (err) console.log(err);
      console.log('Successful updated');
    });
  }

  delete(id) {
    return this.getModel().findByIdAndRemove(id, (err) => {
      if (err) console.log(err);
      console.log('Successful deletion');
    });
  }
}

module.exports = AbstractRepository;
