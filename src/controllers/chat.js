'use strict'
const userModel = require('../models/user');
const chatModel = require('../models/chat');



async function list(req, res) {
    let data = {};
    data.chat = await chatModel.list(req.params.id);
    
    return data;
}



async function findChat(req, res) {
    const idLoguedUser = 1;
    const idUser = req.params.id_user;
    console.log({ "message": "buscando chat", idLoguedUser, idUser });
    let data = {};
    data.messsage = await chatModel.findChat(idUser, idLoguedUser);
    data.user = await userModel.list();

    res.render('chat/message', {
        "messsages": data.messsage,
        "users": data.user
    });

    

}

async function listAll() {
    const data = {};
    data.chat = await chatModel.list();
    
    console.log(data);
    return data;
}

async function add(req, res) {
    const added = await chats.add(req.body);
    return added;
}

module.exports = { list, listAll, findChat, add };