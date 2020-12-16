const pool = require('../database');

async function listAll(req){
    const dashboard = await pool.query('select * from loquesea ');
    return dashboard;
}

module.exports = {listAll};