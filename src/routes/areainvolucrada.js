const express = require('express');
const router = express.Router();
const pool= require('../database');
const areainvolucradaController = require('../controllers/areainvolucrada');

// router.get('/',(req, res,)=> {
//     res.render('dashboard');
// })


router.get('/',async(req,res)=>{
    const areainvolucrada = await areainvolucradaController.listAll();
    res.render('areainvolucrada/control',{areainvolucrada});
});

module.exports= router;