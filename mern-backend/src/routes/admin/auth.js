const express=require('express');
const user = require('../../models/user');
const router=express.Router();
const {signup,signin,requireSignin}=require('../../controllers/admin/auth')


router.post('/admin/signup',signup)
router.post('/admin/signin',signin)


module.exports=router;