const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
  name: String,
  email: String,
  contact: String,
  addres: String
});

model.exports = mongoose.model("employee", employeeSchema);
