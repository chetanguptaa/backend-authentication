const express = require('express');
const {register, login} = require('./controllers/authController');
const Router = require('./routes/userRoutes');
const connectingToTheDatabase = require('./database/database');
const app = express();
const port = 8000;

// connectingToTheDatabase('')

app.use(express.json());

app.use('/users', Router);

app.listen(port, () => {
    `server is listening on port ${port}`;
})

