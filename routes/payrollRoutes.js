const express = require('express');
const { addPayroll, getPayroll } = require('../controllers/payrollController');

const router = express.Router();

/**
 * @swagger
 * /api/payroll:
 *   post:
 *     summary: Add payroll details
 *     tags: [Payroll]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               employeeId:
 *                 type: string
 *               salary:
 *                 type: number
 *               bonus:
 *                 type: number
 *     responses:
 *       201:
 *         description: Payroll details added
 *       400:
 *         description: Bad request
 */
router.post('/', addPayroll);

/**
 * @swagger
 * /api/payroll/{id}:
 *   get:
 *     summary: Get payroll details
 *     tags: [Payroll]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Payroll ID
 *     responses:
 *       200:
 *         description: Payroll details retrieved
 *       404:
 *         description: Payroll not found
 */
router.get('/:id', getPayroll);

module.exports = router;
