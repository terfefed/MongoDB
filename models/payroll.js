const mongoose = require('mongoose');

const payrollSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required: true
  },
  salary: {
    type: Number,
    required: true
  },
  bonus: {
    type: Number
  }
});

const Payroll = mongoose.model('payroll', payrollSchema);

module.exports = Payroll;
