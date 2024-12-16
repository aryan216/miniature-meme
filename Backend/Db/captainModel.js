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
        vehicleName:{
            type:String,
            required:true
        },
        color:{
            type:String,
            required:true,
        },
        plate:{
            type:String,
            required:true,
            minlength:[10,"plate must be 10 characters long"]
        },
        capacity:{
            type:Number,
            required:true
        },
        vehicleType:{
            type:String,
            required:true,
            enum: [ 'hatchback','suv', 'motorcycle', 'auto' ]
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


captainSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:'24h'})
    return token
}
captainSchema.methods.comparePassword=async function(password){
    // console.log(password)
    return await bcrypt.compare(password,this.password)
}

captainSchema.statics.hashPassword=async function(password){
    // console.log(password)
    return await bcrypt.hash(password,10)
}

const captainModel=mongoose.model("captain",captainSchema)

module.exports=captainModel