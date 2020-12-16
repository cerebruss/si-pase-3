'use strict'

const areainvolucrada = require('../models/areainvolucrada');

async function listAll (req = null){
    const listAll = await areainvolucrada.listAll();
    return listAll;
}

module.exports = {listAll};