const captainModel=require("../Db/captainModel")
const captainService=require("../services/captainService")
const blackListTokenModel=require("../Db/blacklist")
const {validationResult}=require("express-validator")

module.exports.registerCaptain= async (req,res,next)=>{
    const errors=validationResult(req);
         if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
            
        }   
    
    const {firstname,lastname,email,password,vehicle}=req.body;

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
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType

    });
    const token=captain.generateAuthToken()
    res.status(201).json({token,captain});
}