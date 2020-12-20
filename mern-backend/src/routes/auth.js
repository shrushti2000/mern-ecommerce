const express=require('express');
const user = require('../models/user');
const router=express.Router();
const {signup,signin}=require('../controllers/auth')


router.post('/signup',signup)
router.post('/signin',signin)
module.exports=router;