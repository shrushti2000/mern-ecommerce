const express=require('express');
const user = require('../../models/user');
const router=express.Router();
const {signup,signin,signout}=require('../../controllers/admin/auth');
const {validateSignupRequest, validateSigninRequest, isRequestvalidated } = require('../../validators/auth');
const { requireSignin } = require('../../common-middleware');



router.post('/admin/signup',validateSignupRequest, isRequestvalidated,signup)
router.post('/admin/signin',validateSigninRequest, isRequestvalidated,signin)
router.post('/admin/signout',requireSignin,signout)


module.exports=router;