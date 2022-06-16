const path=require('path');

const express=require('express');

const contact=require('../controllers/contact');

const router=express.Router();


router.get('/contactus',contact.getInfo);

router.post('/contactus',contact.success);

module.exports=router;