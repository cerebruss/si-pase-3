'use strict'

const postModel = require('../models/post');
const userModel = require('../models/user');


async function list(req = null) {
    let data = {};
    data.post = await postModel.list(req.params.id);
    data.comment = await postModel.listMessage(req.params.id);
    data.user = await userModel.list();
    return data;
}

async function listAll(req = null) {
    const data = {};
    data.post = await postModel.list();
    
    console.log(data);
    return data;
}

async function add(req = null) {
    const name = req.body.name;
    
    const newPost = {
        "name":name,
        
    }
    const added = await postModel.add(newPost);
    return added;
}

module.exports = { listAll, add, list };