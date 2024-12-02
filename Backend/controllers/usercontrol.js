const { validationResult } = require('express-validator');
const userModel=require('../Db/db');
const userService=require('../services/userServices')
const blackListTokenModel=require("../Db/blacklist")


module.exports.registerUser= async (req,res,next)=>{
    const errors=validationResult(req);
         if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
            
        }   
    
    const {firstname,lastname,email,password}=req.body;
    const hashedPassword=await userModel.hashPassword(password);
    const user=await userService.createUser({
        firstname,
        lastname,
        email,
        password:hashedPassword

    });
    const token=user.generateAuthToken()
    res.status(201).json({token,user});
}

module.exports.loginUser=async (req,res,next)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    } 

    const {email,password}=req.body;

    const user=await userModel.findOne({email}).select('+password');

    if(!user){
        res.status(401).json({message:'Invalid User/Password'})
    }

    const isMatch=await user.comparePassword(password)

    if(!isMatch){
        res.status(401).json({message:'Invalid user/password'})
    }

    const token=user.generateAuthToken()
    res.cookie('token',token);
    res.status(201).json({token,user})

}

module.exports.getUserProfile=async(req,res,next)=>{
    res.status(200).json(req.user)
}

module.exports.logoutUser=async(req,res,next)=>{
    res.clearCookie('token')
    const token=req.cookies.token || req.headers.authorization.split(' ')[ 1 ];
    await blackListTokenModel.create({ token });

    res.status(200).json({ message: 'Logged out' });
}