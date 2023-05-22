const userSchema = require('../models/userModel');


const getLogin = async (req, res) => {
    res.setHeader('Cache-Control', 'no-store');
    res.statusCode = 200;
    res.send('Login Page');
}

const getRegistration = async (req, res) => {
    res.setHeader('Cache-Control', 'no-store');
    res.statusCode = 200;
    res.send('Registration Page');
}

const register = async (req, res) => {
    const {name, email, password} = req.body;
    res.send('Registration Successfull');
    // res.redirect('/login');
}

const login = async (req, res) => {
    const {name, password} = req.body;
    res.redirect('/users/home');
}

const home = async (req, res) => {
    res.send('Home Page');
}
module.exports = {
    getLogin,
    getRegistration,
    register,
    login,
    home
};