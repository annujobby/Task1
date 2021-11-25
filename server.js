const express = require('express');
const connectDB = require('./config/db');
const register = require('./routes/api/registration');
const log = require('./routes/api/login');
const profile = require('./routes/api/profile');


const app = express();

//connect DB
connectDB();

//Init middleware
app.use(express.json({
    extended: false
}));

app.get('/', (req, res) => res.send('API running'));

//define routes

app.use('/api/registration', register);
app.use('/api/login', log);
app.use('/api/profile', profile);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server started at port ${PORT}`));