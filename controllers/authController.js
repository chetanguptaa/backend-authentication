const bcrypt = require('bcryptjs');
// const USERS = require('../database/models/userModel');
const USERS = [];

const register = async (req, res) => {
    /* -------- DATABASE IMPLEMENTATION FOR LATER-------- */
    // try {
    //     const {name, email, password} = req.body;
    //     const existingUser = await User.findOne({email});
    //     if(Users.find((x) => x.email = email)) {
    //         return res.status(409).json({error: 'Email already registered'});
    //     }
    //     if(existingUser) {
    //         return res.status(409).json({error: 'Email already registered'});
    //     }
    //     const cryptPassword = await bcrypt.hash(password, 10);
    //     const newUser = new User({
    //         name,
    //         email,
    //         password: cryptPassword,
    //     })

    //     await newUser.save();
    //     res.status(201).json({message: 'Registration Successfull'});
        
    // } catch (error) {
    //     console.log('error registring User: '+ error);
    //     res.status(500).json({
    //         error: 'internal server error'
    //     })
    // }
    try {
        const {name, email, password} = req.body;
        if(USERS.find((x) => x.email === email)) {
            return res.status(409).json({
                error: 'Email already registered'
            })
        } 
        const cryptPassword = await bcrypt.hash(password, 10);
        USERS.push({
            name, 
            email, 
            cryptPassword
        })
        res.status(201).json({
            message: 'Registration Successfull'
        })
    } catch ( error ) {
        console.log('error registering user: ' + error);
        res.status(500).json({
            error: 'Internal server error'
        })
    } 
}

const login = async (req, res) => {
    /* ----------- DATABASE IMPLEMENTATION FOR LATER ---------- */
    // try {
    //     const {email, password} = req.body;
    //     const user = await User.findOne({email});
    //     if(!user) {
    //         return res.status(401).json({
    //             error: 'Invalid Email or Password'
    //         })
    //     }
    //     const passwordMatch = await bcrypt.compare(password, user.password);
    //     if(!passwordMatch) {
    //         return res.status(401).json({
    //             error: 'Invalid Email or Password'
    //         })
    //     }
    //     res.json({
    //         message: 'Login Successful'
    //     })
    // } catch (error) {
    //     console.log('error logging in: ' + error);
    //     res.status(500).json({
    //         error: 'internal server error'
    //     })
    // }
    try {
        const {email, password} = req.body;
        const user = await USERS.find( (x) => x.email === email );
        if(!user) {
            return res.status(401).json({
                error: 'Invalid Email or password'
            })
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if(!passwordMatch) {
            return res.status(401).json({
                error: 'Invalid Email or password'
            })
        }
        res.json({
            message: 'Login successfull'
        })
    } catch( error ) {
        console.log('error logging in: ' + error)
        res.status(500).json({
            error: 'internal server error'
        })
    }
}

module.exports = {register, login};