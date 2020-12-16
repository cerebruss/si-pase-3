'use strict'

const usersController = require('../models/user');


async function listUser (req){
    const data = {};
    data.users = await usersController.listUser(req.params.id);
   
    console.log(data.users[0]);
    return data;
}

async function listAll (req = null){
    const data = {};
    data.users = await usersController.listAll();
    
    console.log(data);
    return data;
}

async function addUser (req = null){
    const added = await users.addUser(req.body);
    return added;
}

async function updateUser (req){
    const updated = await users.addUser(req);
    return updated;
}

module.exports = {listAll, addUser, updateUser, listUser};