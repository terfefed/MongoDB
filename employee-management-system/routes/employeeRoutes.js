const express = require('express');
const {
  getEmployees,
  createEmployee,
} = require('../controllers/employeeController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
  .get(protect, admin, getEmployees)
  .post(protect, admin, createEmployee);

module.exports = router;
