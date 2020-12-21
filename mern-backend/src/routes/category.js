const express=require('express');
const category = require('../models/category');
const Category = require('../models/category');
const router=express.Router();

const { addCategory, getCategories } = require('../controllers/category');
const { requireSignin, adminMiddleware } = require('../common-middleware');

router.post('/category/create',requireSignin,adminMiddleware,addCategory)
router.get('/category/getCategories',getCategories)
module.exports=router;