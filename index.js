const express = require('express');
const Router = require('./routes/userRoutes');

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.static('views'));

app.use('/users', Router);

app.listen(port, () => {
    `server is listening on port ${port}`;
})

