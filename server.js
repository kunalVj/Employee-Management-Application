const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const employeeRoutes = require('./routes/employee');

require('dotenv').config()

const app = express();
const PORT = process.env.Port;



app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URL);

app.use('/api/employees', employeeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


