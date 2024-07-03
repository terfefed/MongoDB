const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const { swaggerUi, swaggerDocs } = require('./swagger');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/employees', require('./routes/employeeRoutes'));
app.use('/api/payroll', require('./routes/payrollRoutes'));
app.use('/api/leave-requests', require('./routes/leaveRequestRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
