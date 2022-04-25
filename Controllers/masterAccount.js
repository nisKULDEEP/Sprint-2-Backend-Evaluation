const masterAccountModel = require("../Models/masterAccount");
const user = require("../Models/user");

module.exports.addMasterAccount = async (req, res) => {
  try {
    const accountDetails = await masterAccountModel.insertOne(req.body);
    res.status(200).json({
      status: "added",
      data: accountDetails,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
    });
  }
};
