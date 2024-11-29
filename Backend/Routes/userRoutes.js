const express=require("express");
const router=express.Router();

const {body}=require('express-validator');
const userController=require('../controllers/usercontrol');


router.post('/register',[
    body('email').isEmail().withMessage('invalidEmail'),
    body('firstname').isLength({min:3}).withMessage('enter name'),
    body('lastname').isLength({min:3}).withMessage('enter lastname'),
    body('password').isLength({min:5}).withMessage('password must be 6 digits long')
],
userController.registerUser
)
router.post('/login',[
    body('email').isEmail().withMessage("invalid email"),
    body('password').isLength({min:5}).withMessage("password should be 5 character long")
],
userController.loginUser
)



module.exports=router