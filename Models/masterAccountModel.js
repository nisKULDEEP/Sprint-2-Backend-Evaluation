const mongoose = require("mongoose");

const masterAccountSchema = new mongoose.Schema({
  balance: {
    type: Number,
    require: [true, "Please tell your balance"],
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

module.exports = mongoose.model("MasterAccountDetails", masterAccountSchema);
