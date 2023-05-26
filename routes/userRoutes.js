const {
    getLogin,
    getRegistration, 
    getHome
} = require('../controllers/userController');
const {
    register, 
    login,
    getUsers,
    getSingleUser
} = require('../controllers/authController');
const express = require('express');

const Router = express.Router();

Router
.get('/login', getLogin)
.get('/home', getHome)
.get('/registration', getRegistration)
.get('/users', getUsers)
.get('/users/:id', getSingleUser);

Router.post('/login', login);
Router.post('/registration', register);

module.exports =  Router;