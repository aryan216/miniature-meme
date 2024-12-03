const captainModel=require("../Db/captainModel");

module.exports.createCaptain=async ({
    email,firstname,password,lastname,color,plate,vehicleType
})=>{
    if(!firstname || !email || !password || !color || !plate  || !vehicleType){
        throw new Error("all fields are mandatory");
    }
    const captain=captainModel.create({
        firstname,
        lastname,
        email,
        password,
        vehicle:{
            color,
            plate,
            vehicleType
        }
        
    })

    return captain 
}