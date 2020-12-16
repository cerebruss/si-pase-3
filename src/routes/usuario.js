const express = require('express');
const router = express.Router();
const pool= require('../database');

router.get('/auditoria',async(req,res)=>{
 //res.send('Oh yeah');
    const usua = await pool.query('select * from `department`');
//    const rol = await pool.query('select * from `bebidas`');
//    const tipo_cerveza = await pool.query('select * from `tipo_cerveza`');
    res.render('usuario/auditoria',{usua});
 });


router.post('/auditoria',async(req,res)=>{
   // res.send('Oh yeah');
//   console.log(req.body);
//   await pool.query('insert into usuarios set ?', [req.body]);
//   res.redirect('/usuario/auditoria');
});
router.get('/delete/:id',async(req,res)=>{
   // const {id}= req.params;
   // const usua= await pool.query('delete from usuarios where id=?',[id]);
   // res.redirect('/usuario/auditoria');
});

//router.get('/update',async(req,res)=>{
//    // res.send('Oh yeah');
//    const usua = await pool.query('select * from `usuarios`');
//    const bebidas = await pool.query('select * from `bebidas`');
//    const tipo_cerveza = await pool.query('select * from `tipo_cerveza`');
//    res.render('links/update',{usua, bebidas, tipo_cerveza});
// });

// router.post('/update',async(req,res)=>{
//    // res.send('Oh yeah');
//    console.log(req.body);
//    const usua = await pool.query('select * from `usuarios`');
//    await pool.query('update usuarios set nombre=?, usuario=?, contrasena=?, edad=?, correo=? where id=?',[req.body.nombre, req.body.usuario, req.body.contrasena, req.body.edad, req.body.correo, req.body.id]);
//    res.redirect('/links/update');
// });
module.exports= router;