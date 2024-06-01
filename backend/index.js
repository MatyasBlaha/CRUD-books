import express from 'express';
import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const PORT = 3001
const app = express();
app.use(express.json())

const db = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

app.get('/', (res, req) => {
    console.log('server response')
})

app.get('/books', (req, res) => {
    const q = 'SELECT * FROM books'
    db.query(q, (err, data) => {
        if(err) return req.json(err)
        return res.json(data)
    })
})

app.post('/books', (req, res) => {
    const q = 'INSERT INTO books (title, description, cover, price) VALUES(?)'
    const values = [
        req.body.title,
        req.body.description,
        req.body.cover,
        req.body.price,
    ]
    db.query(q, [values], (err, data) => {
        if(err) return req.json(err)
        return res.json(data)
    })
})

app.listen(PORT, () => {
    console.log('listening on port: ' + PORT)
})