const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const resumeRoutes = require('./routes/resume_api');
const gptRoutes = require('./routes/gpt_api');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'resume_db'
});
  
app.set('db', db);
  
// Routes
app.use('/api', resumeRoutes);
app.use('/api', gptAPI);
  
 app.listen(3000, () => console.log('Server running on port 3000'));
  