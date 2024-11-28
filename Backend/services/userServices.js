const userModel=require('../Db/db')


module.exports.createUser=async ({email,firstname,password,lastname})=>{
    if(!email || !firstname ||!lastname|| !password){
        throw new Error('All fields are mandatory')
    }
    const user=userModel.create({
        firstname,lastname,email,
        password
    })

    return user;
}