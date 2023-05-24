const bcrypt = require('bcrypt');
const User = require('../database/models/userModel');

const register = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        const existingUser = await User.findOne({email});
        if(existingUser) {
            return res.status(409).json({error: 'Email already registered'});
        }
        const cryptPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: cryptPassword,
        })

        await newUser.save();
        res.status(201).json({message: 'Registration Successfull'});
        
    } catch (error) {
        console.log('error registring User: '+ error);
        res.status(500).json({
            error: 'internal server error'
        })
    }
}

const login = async(req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user) {
            return res.status(401).json({
                error: 'Invalid Email or Password'
            })
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if(!passwordMatch) {
            return res.status(401).json({
                error: 'Invalid Email or Password'
            })
        }
        res.json({
            message: 'Login Successful'
        })
    } catch (error) {
        console.log('error logging in: ' + error);
        res.status(500).json({
            error: 'internal server error'
        })
    }
}

module.exports = {register, login};