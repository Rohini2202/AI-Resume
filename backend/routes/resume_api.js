const express = require('express');
const router = express.Router();

router.post('/save-resume', (req, res) => {
  const db = req.app.get('db');
  const { name, email, phone, profile, education, work, skills, projects, certificates, summary } = req.body;

  const insertQuery = 'INSERT INTO resumes (name, email, phone, profile, education, work, skills, projects, certificates, summary) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [name, email, phone, profile, JSON.stringify(education), JSON.stringify(work), JSON.stringify(skills), JSON.stringify(projects), JSON.stringify(certificates), summary];

  db.query(insertQuery, values, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Resume saved successfully' });
  });
});

module.exports = router;