const express = require('express');
const {register, login} = require('./controllers/authController');
const Router = require('./routes/userRoutes');
const connectToTheDatabase = require('./database/database');
const app = express();
const port = 8000;
require('dotenv').config();

const mongo_uri = process.env.MONGO_URI

connectToTheDatabase(mongo_uri);

app.use(express.json());

app.use('/', Router);
app.use('/', register);
app.use('/', login);

app.listen(port, () => {
    `server is listening on port ${port}`;
})

