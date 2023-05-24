const express = require('express');
const {register, login} = require('./controllers/authController');
const Router = require('./routes/userRoutes');
const connectToTheDatabase = require('./database/database');
const app = express();
const port = 8000;

// connectToTheDatabase('')

app.use(express.json());

app.use('/users', Router);
app.use('/users', register);
app.use('/users', login);

app.listen(port, () => {
    `server is listening on port ${port}`;
})

