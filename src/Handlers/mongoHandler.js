const mongoose = require("mongoose");
const settings = require("../Configs/settings.json");

mongoose.connect(settings.mongoUrl, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
});

mongoose.connection.on("connected", () => {
});
mongoose.connection.on("error", () => {
});
