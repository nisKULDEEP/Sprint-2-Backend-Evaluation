const express = require("express");
// const app = express();
const router = express.Router();

router.route("/").get((req, res) => {
  res.json({
    status: "sucessful",
  });
});

// app.get("/", (req, res) => {
//   res.json({
//     status: "success",
//   });
// });

module.exports = router;
