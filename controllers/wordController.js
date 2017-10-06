const db = require("../models");

// Defining methods for the wordController
//removed sort
module.exports = {
  findAll: function(req, res) {
    var randomOffset =  Math.floor(Math.random() * 7);
    db.Word
      .find(req.query)
      .limit(-1)
      .skip(randomOffset)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));

  },
  findById: function(req, res) {
    db.Word
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Word
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Word
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Word
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
