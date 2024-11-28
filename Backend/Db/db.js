const mongoose=require("mongoose");
mongoose.connect(process.env.DB_CONNECT).then(console.log("connected to db"));
const bcrypt=require("bcrypt")
const jwt=require('jsonwebtoken')
const userSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true    
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:[5,'Email must be 5 characters long']
    },
    password:{
        type:String,
        required:true,
        select:false,
        minlength:[5,'Password must be 5 characters long']
    },
    socketId:{
        type:String
    }
})
userSchema.methods.generateAuthToken= function(){
    const token=jwt.sign({_id:this.id},process.env.JWT_SECRET)
    return token;
}
userSchema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password,this.password);
}
userSchema.statics.hashPassword=async function(password){
    return await bcrypt.hash(password,10)
}
module.exports=userSchema;