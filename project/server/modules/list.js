const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const ListSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

const list = mongoose.model("List", ListSchema);

module.exports = list;
