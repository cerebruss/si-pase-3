// const express = require('express');
// const router = express.Router();
// const pool= require('../database');

// router.get('/recoleccion',async(req,res)=>{
//  //res.send('Oh yeah');
//     const dept = await pool.query('select * from `department`');
// //    const rol = await pool.query('select * from `bebidas`');
// //    const tipo_cerveza = await pool.query('select * from `tipo_cerveza`');
//     res.render('levantamiento/recoleccion',{dept});
//  });
//  module.exports= router;

 const express = require('express');
const router = express.Router();
const pool= require('../database');
const levantamientoController = require('../controllers/levantamiento');

// router.get('/',(req, res,)=> {
//     res.render('dashboard');
// })


router.get('/recoleccion',async(req,res)=>{
    const levantamiento = await levantamientoController.listAll();
    res.render('levantamiento/recoleccion',{levantamiento});
});

module.exports= router;