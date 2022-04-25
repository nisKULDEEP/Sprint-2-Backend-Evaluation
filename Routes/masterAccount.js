const express = require("express");
const { addMasterAccount } = require("../Controllers/masterAccount");
const router = express.Router();

router.route("/").post(addMasterAccount);

module.exports = router;
