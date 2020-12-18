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

  update(_id, data) {
    return this.getModel().findOneAndUpdate({_id}, data, (err) => {
      if (err) console.log(err);
      console.log('Successful updated');
    });
  }

  delete(_id) {
    return this.getModel().findOneAndRemove({_id}, (err) => {
      if (err) console.log(err);
      console.log('Successful deletion');
    });
  }
}

module.exports = AbstractRepository;
