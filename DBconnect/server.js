const mongoose = require("mongoose");

module.exports = () => {
  mongoose
    .connect(
      "mongodb+srv://niskuldeep:asd%401998@cluster0.brhhe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    )
    .then(console.log("DB Connected"));
};
