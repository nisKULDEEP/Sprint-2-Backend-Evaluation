const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: [true, "Please tell your First Name"],
  },
  middleName: {
    type: String,
    require: [false, "Please tell your Middle Name"],
  },
  lastName: {
    type: String,
    require: [true, "Please tell your Last Name"],
  },
  age: {
    type: Number,
    require: [true, "Please tell your Age"],
  },
  email: {
    type: String,
    require: [true, "email is required"],
    unique: true,
    lowercase: true,
  },
  address: {
    type: String,
    require: [true, "Please tell your Address"],
  },
  gender: {
    type: String,
    default: "Female",
  },
  type: {
    type: String,
    enum: {
      values: ["customer", "employee"],
      message: "type must be customer or employee",
    },
    default: "customer",
  },
  createdAt: {
    type: Number,
    require: [true, "createdAt is required"],
  },
  updatedAt: {
    type: Number,
    require: [true, "updatedAt is required"],
  },
});

module.exports = mongoose.model("User", userSchema);
