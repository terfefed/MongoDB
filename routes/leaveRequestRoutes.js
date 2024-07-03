const express = require('express');
const { addLeaveRequest, getLeaveRequest } = require('../controllers/leaveRequestController');

const router = express.Router();

/**
 * @swagger
 * /api/leave-requests:
 *   post:
 *     summary: Add leave request
 *     tags: [Leave Requests]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               employeeId:
 *                 type: string
 *               startDate:
 *                 type: string
 *                 format: date
 *               endDate:
 *                 type: string
 *                 format: date
 *               reason:
 *                 type: string
 *     responses:
 *       201:
 *         description: Leave request added
 *       400:
 *         description: Bad request
 */
router.post('/', addLeaveRequest);

/**
 * @swagger
 * /api/leave-requests/{id}:
 *   get:
 *     summary: Get leave request
 *     tags: [Leave Requests]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Leave Request ID
 *     responses:
 *       200:
 *         description: Leave request retrieved
 *       404:
 *         description: Leave request not found
 */
router.get('/:id', getLeaveRequest);

module.exports = router;
