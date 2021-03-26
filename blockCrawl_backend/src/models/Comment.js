const mongoose = require("mongoose");

const types = mongoose.Schema.Types;

const CommentSchema = mongoose.Schema({
  commenter: {
    type: types.ObjectId,
    required: true,
    ref: "User",
  },
  comment: {
    type: types.String,
    required: true,
  },
  isDeleted: {
    type: types.Boolean,
    default: false,
  },
  createdAt: {
    type: types.Date,
    default: Date.now,
  },
});

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = { Comment };
