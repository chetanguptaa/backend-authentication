const userSchema = require('../database/models/userModel');
const path = require('path');
const fs = require('fs');


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
    try {
        const {name, email, password} = req.body;
        const registerData = {name, email, password};
        const registrationFilePath = path.resolve(__dirname ,'..','database', 'registrationDetails.json');

        let existingData = {};

        if(fs.existsSync(registrationFilePath)) {
            const fileContent = fs.readFileSync(registrationFilePath, 'utf8');

            existingData = JSON.parse(fileContent);
        }

        const newDataKey = Object.keys(existingData).length + 1;
        existingData[newDataKey] = registerData;
        fs.writeFileSync(registrationFilePath, JSON.stringify(existingData));
        res.send('Registration Successfull');

        // Todo -> res.redirect('/login');
    
    } catch ( error ) {
        console.log(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
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