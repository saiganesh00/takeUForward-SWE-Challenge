const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'system', // replace with your MySQL password
    database: 'banner_db'
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to MySQL database');
});

// API to get banner data
app.get('/banner', (req, res) => {
    db.query('SELECT * FROM banner WHERE id = 1', (err, result) => {
        if (err) throw err;
        res.json(result[0]);
    });
});

// API to update banner data
app.post('/update-banner', (req, res) => {
    const { description, timer, link, isVisible } = req.body;
    const sql = 'UPDATE banner SET description = ?, timer = ?, link = ?, isVisible = ? WHERE id = 1';
    db.query(sql, [description, timer, link, isVisible], (err, result) => {
        if (err) throw err;
        res.send('Banner updated successfully');
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
