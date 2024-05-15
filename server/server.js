import express from 'express';
import cors from 'cors';
import mysql2 from 'mysql2';

const app = express();
app.use(cors());

app.listen(3001, () => {
    console.log("Server is listening on port 3001");
});

const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'q1234',
    database: 'student'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database');
});

app.get('/', (req, res) => {
    const selectStudent = "SELECT * FROM students";
   
    db.query(selectStudent, (err, result) => {
        if (err) {
            return res.json({ error: "Error in query" });
        }
        return res.json(result);
    });
});

app.get('/add-Student',(req,res)=>{
  const addStudent ="Insert Into students Values"(req.Name+ req.Email);

  db.query(addStudent, (err, result) => {
    if (err) {
        return res.json({ error: "Error in query" });
    }
    return res.json(result);
});
});
