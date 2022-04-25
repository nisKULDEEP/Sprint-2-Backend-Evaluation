const mongoose = require("mongoose");

const savingAccountSchema = new mongoose.Schema({
  account_number: {
    type: Number,
    require: [true, "Please tell your account number"],
    unique: true,
  },
  balance: {
    type: Number,
    require: [true, "Please tell your balance"],
  },
  interestRate: {
    type: Number,
    require: [true, "Please tell interest rate"],
  },
  startDate: {
    type: Number,
    require: [true, "tell me start date"],
  },
  maturityDate: {
    type: Number,
    require: [true, "tell me maturity date"],
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

module.exports = mongoose.model("SavingAccountDetails", savingAccountSchema);
