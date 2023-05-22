const {
    getLogin,
    getRegistration, 
    login, 
    register,
    home
} = require('../controllers/userController');
const express = require('express');

const Router = express.Router();

Router
.get('/login', getLogin)
.get('/home', home)
.get('/registration', getRegistration);

Router.post('/login', login);
Router.post('/registration', register);

module.exports =  Router;