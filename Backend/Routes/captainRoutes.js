const captainController=require('../controllers/captainController')
const express=require("express")
const router=express.Router()
const {body}=require("express-validator")
const authMiddleware=require("../middlewares/authMiddleware")

router.post("/register",[
    body('email').isEmail().withMessage("Invalid Email"),
    body('firstname').isLength({min:3}).withMessage('enter name'),
    body('lastname').isLength({min:3}).withMessage('enter lastname'),
    body('password').isLength({min:5}).withMessage('password must be 6 digits long'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be at least 3 characters long'),
    body('vehicle.plate').isLength({ min: 10 }).withMessage('Plate must be at least 3 characters long'),
    body('vehicle.vehicleType').isIn([ 'car', 'motorcycle', 'auto' ]).withMessage('Invalid vehicle type'),

], captainController.registerCaptain)

router.post("/login",[
    body('email').isEmail().withMessage("Invalid Email"),
    body('password').isLength({min:5}).withMessage("password must be 5 digits long")
],captainController.loginCaptain)

router.get("/profile",authMiddleware.authCaptain,captainController.getCaptainProfile)
router.get('/logout',authMiddleware.authCaptain,captainController.logoutCaptain)

module.exports=router