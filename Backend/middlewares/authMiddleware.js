const userModel=require("../Db/db")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const blackListTokenModel = require('../Db/blacklist');

module.exports.authUser=async(req,res,next)=>{
    const token=req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }


    const isBlacklisted = await blackListTokenModel.findOne({ token: token });

    if (isBlacklisted) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    if(!token){
        console.log("not token")
        return res.status(401).json({message:"unauthorized"});
    }

    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        const user= await userModel.findById(decoded._id)
        req.user=user

        return next();
    }catch(err){
        
        return res.status(401).json({message:"unauthorized"});
    }

}
