const express = require('express');
const cors = require('cors');
const app = express();
const monoose = require('mongoose');

require('dotenv').config();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/signup', require('./routes/signup'))
app.use('/api/login', require('./routes/login'))
app.use('/api/signout', require('./routes/signout'))
app.use('/api/todos', require('./routes/todos'))
app.use('/api/refresh-token', require('./routes/refreshToken'))
app.use('/api/user', require('./routes/user'))

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});