const express=require('express');
const user = require('../models/user');
const router=express.Router();
const {validateSignupRequest,validateSigninRequest, isRequestvalidated} =require('../validators/auth')
const {signup,signin}=require('../controllers/auth')


router.post('/signup',validateSignupRequest, isRequestvalidated,signup)
router.post('/signin',validateSigninRequest,isRequestvalidated,signin)


module.exports=router;