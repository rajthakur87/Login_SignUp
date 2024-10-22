// const mongoose = require('mongoose');

// const EmployeeSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
// });

// module.exports = mongoose.model('Employee', EmployeeSchema);



const mongoose = require("mongoose");
const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Employee's name
  email: { type: String, required: true, unique: true }, // Employee's email (unique)
  password: { type: String, required: true }, // Hashed password
  token: { type: String },
});

module.exports = mongoose.model("Employee", EmployeeSchema);
