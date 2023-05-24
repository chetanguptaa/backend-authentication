const {
    getLogin,
    getRegistration, 
    getHome
} = require('../controllers/userController');
const {
    register, 
    login 
} = require('../controllers/authController');
const express = require('express');

const Router = express.Router();

Router
.get('/login', getLogin)
.get('/home', getHome)
.get('/registration', getRegistration);

Router.post('/login', login);
Router.post('/registration', register);

module.exports =  Router;