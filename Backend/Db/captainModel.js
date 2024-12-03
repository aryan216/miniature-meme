const mongoose=require("mongoose")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

const captainSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        match:[/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "please enter a valid email"]
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    socketId:{
        tpe:String
    },
    status:{
        type:String,
        enum:["active","inactive"],
        default:"active"
    },
    vehicle:{
        colour:{
            type:String,
            required:true,
        },
        plate:{
            type:String,
            required:true,
            minlength:[10,"plate must be 10 characters long"]
        },
        vehicleType:{
            type:String,
            required:true
        }
        

    },
    location:{
        lat:{
            type:Number
        },
        lon:{
            type:Number
        }
    }

})

captainSchema.method.generateAuthToken=function(){
    const token=jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:'24h'})
    return token
}
captainSchema.method.comparePassword=async function(){
    return await bcrypt.compare(password,this.password)
}
captainSchema.static.hashPassword=async function(){
    return await bcrypt.hash(password,10)
}

const captainModel=mongoose.model("captain",captainModel)

module.exports=captainModel