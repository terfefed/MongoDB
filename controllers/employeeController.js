const asyncHandler = require('express-async-handler');
const Employee = require('../models/employee');

// @desc    Get all employees
// @route   GET /api/employees
// @access  Private/Admin
const getEmployees = asyncHandler(async (req, res) => {
  const employees = await Employee.find({});
  res.json(employees);
});

// @desc    Create an employee
// @route   POST /api/employees
// @access  Private/Admin
const createEmployee = asyncHandler(async (req, res) => {
  const { name, position, department, hireDate } = req.body;

  const employee = new Employee({
    name,
    position,
    department,
    hireDate,
  });

  const createdEmployee = await employee.save();
  res.status(201).json(createdEmployee);
});

module.exports = { getEmployees, createEmployee };
