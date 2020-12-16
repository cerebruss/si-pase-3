const pool = require('../database');

async function listAll(req){
    const areainvolucrada = await pool.query('select * from departamento');
    return areainvolucrada;
}

module.exports = {listAll};