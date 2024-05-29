const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  fullName: String,
  age: Number,
  dob: Date,
  salary: Number,
  department: String,
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
