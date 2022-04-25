const mongoose = require("mongoose");

const branchSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please tell your Branch Name"],
  },
  address: {
    type: String,
    require: [true, "Please tell your branch address"],
  },
  IFSC: {
    type: String,
    require: [true, "Please tell your branch IFSC"],
  },
  MICR: {
    type: Number,
    require: [true, "Please tell your branch MICR"],
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

module.exports = mongoose.model("BranchDetails", branchSchema);
