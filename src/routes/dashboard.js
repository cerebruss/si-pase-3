const express = require('express');
const router = express.Router();
const pool= require('../database');
const dashboardController = require('../controllers/dashboard');

// router.get('/',(req, res,)=> {
//     res.render('dashboard');
// })


router.get('/',async(req,res)=>{
    const dashboard = await dashboardController.listAll();
    res.render('dashboard',{dashboard});
});

module.exports= router;