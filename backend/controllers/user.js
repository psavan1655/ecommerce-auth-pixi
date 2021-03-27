const userModel = require('../models/user')
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");
dotenv.config();
const secret = process.env.JWT_SECRET || "POD@123";


exports.getAllUser = async (req, res, next)=>{
    try {
        
        const userData = await userModel.findAll();
        res.status(200).json({
            success: true, 
            data: userData
        });
    } catch (error) {
        res.status(500).json({
            success: false, 
            message: error
        });
    }
    
}

exports.login = async (req, res, next) => {
    const data = req.body.data;
    const email = data['email'];
    const password = data['password'];
    try {   
        const userData = await userModel.findOne({where: {email: email}});
        const hash = userData['password'];
        const login = await bcrypt.compare(password, hash);
        if (login) {
            res.status(200).json({
                success: true, 
                jwt: jwt.sign(email, secret, { expiresIn: '7d' })
            });
        } else {
            us(200).json({
                success: false,
                message: "Wrong username or password"
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false, 
            message: error
        });
    }
}

exports.postUser = async (req, res, next) => {
    const data = req.body.data;
    const email = data['email'];
    const password = data['password'];
    const saltRounds = 11;
    const securePassword = await bcrypt.hash(password, saltRounds);

    const creds = {
        email: email,
        password: securePassword
    }
    // console.log(data);
    try {

        const user = await userModel.create(creds);
        res.status(200).json({
            success: true,
            message: "user created."
        });

    } catch (error) {
        
        res.status(500).json({
            success: false, 
            message: error
        });
    }
}

exports.putUser = async(req, res, next) => {
    const data = req.body.data;
    const email = data['email'];
    const password = data['password'];
    const saltRounds = 11;
    const securePassword = await bcrypt.hash(password, saltRounds);

    const creds = {
        email: email,
        password: securePassword
    }
    try {

        const user = await userModel.update(creds, {
            where: {email: data['email']}
        });
        res.status(200).json({
            success: true,
            message: "user Updated"
        });

    } catch (error) {
        
        res.status(500).json({
            success: false, 
            message: error
        });
    }
}

exports.deleteUser = async(req, res, next) => {
    const data = req.body.data;
    // console.log(data);
    try {

        const home = await userModel.destroy( {
            where: {id: data['id']}
        });
        res.status(200).json({
            success: true,
            message: "user Deleted"
        });

    } catch (error) {
        
        res.status(500).json({
            success: false, 
            message: error
        });
    }
}