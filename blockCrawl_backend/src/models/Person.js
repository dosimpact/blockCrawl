const mongoose = require("mongoose");

const types = mongoose.Schema.Types;

const PersonSchema = mongoose.Schema({
  name: {
    type: types.String,
    required: true,
    unique: true,
  },
  age: {
    type: types.Number,
    required: true,
  },
  married: {
    type: types.Boolean,
    unique: true,
  },

  comment: {
    type: types.String,
  },
  createdAt: {
    type: types.Date,
    default: Date.now,
  },
});

const Person = mongoose.model("Person", PersonSchema);

module.exports = { Person };
