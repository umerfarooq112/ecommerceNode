const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 30,
  },
  price: {
    type: Number,
    required: true,
    min: 3,
    max: 30,
  },

  description: {
    type: String,
    required: false,
    min: 3,
    max: 150,
  },
});

module.exports = mongoose.model("Items", ItemSchema);
