const express = require('express');
const Employee = require('../models/Employee');
const router = express.Router();

// Get all employees
router.get('/', async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});

// Add new employee
router.post('/', async (req, res) => {
  const newEmployee = new Employee(req.body);
  await newEmployee.save();
  res.json(newEmployee);
});

// Update employee
router.put('/:id', async (req, res) => {
  const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedEmployee);
});

// Delete employee
router.delete('/:id', async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ message: 'Employee deleted' });
});

// Get average salary by department
router.get('/average-salary/:department', async (req, res) => {
  const employees = await Employee.find({ department: req.params.department });
  const avgSalary = employees.length ? employees.reduce((acc, emp) => acc + emp.salary, 0) / employees.length : 0;
  res.json({ averageSalary: avgSalary });
});

// Get average salary of all employees
router.get('/average-salary', async (req, res) => {
  const employees = await Employee.find();
  const avgSalary = employees.length ? employees.reduce((acc, emp) => acc + emp.salary, 0) / employees.length : 0;
  res.json({ averageSalary: avgSalary });
});

// Filter employees based on criteria
router.get('/filter', async (req, res) => {
  const { department, minSalary, maxSalary, minAge, maxAge, dob } = req.query;

  let filters = {};

  if (department) filters.department = department;
  if (minSalary) filters.salary = { ...filters.salary, $gte: parseFloat(minSalary) };
  if (maxSalary) filters.salary = { ...filters.salary, $lte: parseFloat(maxSalary) };
  if (minAge) filters.age = { ...filters.age, $gte: parseInt(minAge) };
  if (maxAge) filters.age = { ...filters.age, $lte: parseInt(maxAge) };
  if (dob) filters.dob = dob;

  const employees = await Employee.find(filters);
  res.json(employees);
});

module.exports = router;
