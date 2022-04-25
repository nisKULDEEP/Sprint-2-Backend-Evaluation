const masterAccountModel = require("../Models/masterAccount");
const userModel = require("../Models/user");

module.exports.addMasterAccount = async (req, res) => {
  try {
    const accountDetails = await masterAccountModel.create(req.body);
    const userInfo = {
      accId: accountDetails._id,
      firstName: req.body.user.firstName,
      middleName: req.body.user.middleName,
      lastName: req.body.user.lastName,
      age: req.body.user.age,
      email: req.body.user.email,
      address: req.body.user.address,
      gender: req.body.user.gender,
      type: req.body.user.type,
      createdAt: req.body.user.createdAt,
      updatedAt: req.body.user.updatedAt,
    };

    await userModel.create(userInfo);
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
