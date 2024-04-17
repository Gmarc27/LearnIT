const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // Add JSON parsing middleware

const db = mysql.createConnection({
    host: "localhost",
    user: 'id22053581_learnit2024',
    password: 'LearnIT2024!',
    database: 'id22053581_learnit'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to database');
});

app.get('/', (req, res) => {
    return res.json("From Backend Side");
});

app.get('/users', (req, res) => {
    const sql = "SELECT * FROM users";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error fetching users:', err);
            return res.status(500).json({ error: 'Error fetching users' });
        }
        return res.json(data);
    });
});

app.post('/SignupScreen', (req, res) => {
    const { studentID, email, firstName, lastName, password } = req.body;
  
    // Hash password before storing it in the database
  
    const query = 'INSERT INTO users (studentID, email, firstName, lastName, password) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [studentID, email, firstName, lastName, password], (err, result) => {
        if (err) {
            console.error('Error inserting user data:', err);
            if (err.code === 'ER_DUP_ENTRY') {
                return res.status(409).send('User already exists');
            }
            return res.status(500).send('Error inserting user data');
        }
        console.log('User data inserted successfully:', result);
        res.status(200).send('User data inserted successfully');
    });
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
