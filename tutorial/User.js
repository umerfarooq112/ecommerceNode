const mongoose = require("mongoose");

const addressSchema = {
  street: String,
  city: String,
};

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    // lowercase: true,
    // uppercase: true,
  },
  age: {
    type: Number,
    min: 10,
    max: 100,
    validate: {
      validator: (v) => v % 2 == 0,
      message: "{VALUE} is not even",
    },
  },
  hobbies: [String],
  //   bestFriend: mongoose.SchemaTypes.ObjectId,
  bestFriend: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  updatedAt: {
    type: Date,
    default: () => new Date(),
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  address: addressSchema,
});

userSchema.methods.sayHi = function () {
  console.log(`Hi My name is ${this.name}`);
};

userSchema.statics.findByName = function (name) {
  return this.findOne({ name: name });
};

userSchema.virtual("nameAndEmail").get(function () {
  return { name: this.name, email: this.email };
});
module.exports = mongoose.model("User", userSchema);
