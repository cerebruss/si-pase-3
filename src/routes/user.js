const express = require('express');
const router = express.Router();

const pool = require('../database');
const usersController = require('../controllers/user');


router.get('/add', async (req, res) => {
    const data = await usersController.listAll(req); 
    console.log(data);
    res.render('users/list', { "users": data.users, "roles": data.roles});
});

router.get('/edit/:id', async (req, res) => {
   
    const data = await usersController.listUser(req); 
    console.log(data);
    res.render('users/form', { "users": data.users, "roles": data.roles });

    
});

router.post('/add', async (req, res) => {
    await pool.query('insert into users set ?', [req])
    res.redirect('./add');
});

router.post('/edit/:id', async (req, res) => {
    await pool.query('insert into users set ?', [req])
    res.redirect('./add');
});


router.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
    await pool.query("delete FROM users WHERE id =?", [id])
    res.redirect('../add');

});

module.exports = router;