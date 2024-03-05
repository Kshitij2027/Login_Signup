const User = require('../models/users')
const { hashPassword, comparePasswords } = require('../helpers/auth');
const jwt = require('jsonwebtoken');

const test = (req, res) => {
    res.json('test is working')
}

const registerUser =async (req, res) => {
    try {
        const {name, email, password} = req.body;
        // check if name is entered
        if (!name) {
            return res.json({
                error: 'name is not entered'
            })
        };
        // check the passowrd
        if (!password || password.length < 6) {
            return res.json({
                error: 'Password is required and should be atleast 6 char long'
            })
        };
        // check the email if it already exists
        const exist = await User.findOne({email})
        if (exist) {
            return res.json({
                error: 'Email is already taken'
            })
        }
        // create a user
const hashedPassword = await hashPassword(password)

        const user = await User.create({
            name, 
            email, 
            password: hashedPassword
        })

        return res.json(user);
    } catch (error) {
        console.log(error)
    }
};


// Login endpoint
const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;

        // check if the user exist
        const user = await User.findOne({email});
        if(!user) {
            return res.json({
                error: 'No user found'
            })
        }

        // check if the passwords match
        const match = await comparePasswords(password, user.password);
        if(match) {
            res.json('passwords match')
        }
        jwt.sign({email: user.email, id: user._id, name: user.name}, process.env.JWT_SECRET, {}, (err, token) =>{
            if(err) throw err;
            // console.log('JWT Token:', token);
            res.cookie('token', token).json(user)
        })
        if(!match) {
            res.json({
                error: 'Passwords not match!'
            })
        }
    } catch (error) {
        console.log(error)
    }
}

const getProfile = (req, res) => {
    const {token}= req.cookies
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
            if (err) {
                console.error(err);
                res.json(null);
            } else {
                res.json(user);
            }
        });
    } else {
        res.json(null);
    }
};
module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile
};