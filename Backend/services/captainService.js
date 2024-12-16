const captainModel=require("../Db/captainModel");

module.exports.createCaptain=async ({
    email,firstname,password,lastname,color,plate,vehicleType,vehicleName,capacity
})=>{
    if(!firstname || !email || !password || !color || !plate  || !vehicleType || !vehicleName || !capacity){
        throw new Error("all fields are mandatory");
    }
    const captain=captainModel.create({
        firstname,
        lastname,
        email,
        password,
        vehicle:{
            vehicleName,
            color,
            capacity,
            plate,
            vehicleType
        }
        
    })

    return captain 
}