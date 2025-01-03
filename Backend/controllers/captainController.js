const captainModel=require("../Db/captainModel")
const captainService=require("../services/captainService")
const blackListTokenModel=require("../Db/blacklist")
const {validationResult}=require("express-validator")

module.exports.registerCaptain= async (req,res,next)=>{
    console.log(req.body)
    console.log(req.body.vehicle)
    const errors=validationResult(req);
         if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
            
        }   
    
    const {firstname,lastname,email,password,vehicle}=req.body;
    console.log(vehicle.vehicleName)
    console.log(vehicle.capacity)
    const isCaptainAlreadyExist = await captainModel.findOne({ email });

    if (isCaptainAlreadyExist) {
        return res.status(400).json({ message: 'Captain already exist' });
    }
    

    const hashedPassword=await captainModel.hashPassword(password);

    const captain=await captainService.createCaptain({
        firstname,
        lastname,
        email,
        password:hashedPassword,
        vehicleName: vehicle.vehicleName,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType

    });
    const token=captain.generateAuthToken()
    res.status(201).json({token,captain});
}

module.exports.loginCaptain=async(req,res,next)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {email,password}=req.body

    const captain=await captainModel.findOne({email}).select('+password')

    if(!captain){
        return res.status(401).json({message:"invalid user/password"})
    }

    const isMatch= await captain.comparePassword(password)
    if(!isMatch){
        return res.status(401).json({message:"invalid user/password"})
    }

    const token= captain.generateAuthToken()
    res.cookie('token',token)
    res.status(201).json({token,captain})
}

module.exports.getCaptainProfile=async(req,res,next)=>{
    res.status(201).json(req.captain)
}
module.exports.logoutCaptain=async(req,res,next)=>{
    res.clearCookie('token')
    const token=req.cookies.token || req.headers.authorization?.split(' ')[1];
    await blackListTokenModel.create({token})
    res.status(201).json({message:"see you again captain"})

}