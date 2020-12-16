'use strict'
const crypto = require("crypto");
const messageModel = require('../models/message');
const chatModel = require('../models/chat');

async function list(req, res) {
    let data = {};
    data.chat = await chatModel.list(req.params.id);
    
    return data;
}

async function findChat(req, res) {
    const idUserLoggedIn = 1;
    const idUser = req.params.id_user;
    console.log({ "message": "buscando chat", idUserLoggedIn, idUser });
    let data = {};
    data.messsage = await chatModel.findChat(idUser, idUserLoggedIn);
    data.user = await userModel.list();

    res.render('chat/message', {
        "messsages": data.messsage,
        "users": data.user
    });

    

}

async function listAll() {
    const data = {};
    data.chat = await chatModel.list();
    
    return data;
}

async function add(req, res) {
    const idUserLoggedIn = 1;
    console.log(req.body);
    const text = req.body.text;
    const idUser = req.params.id_user;
    let data = {};
    data.chat = await chatModel.findChat(idUser, idUserLoggedIn, 1);
    
    console.log({"data del chat": data.chat});
    
    let chat_id = null;
    
    //if (data.chat && data.chat != [] && data.chat.length > 0) {
       // chat_id = data.chat[0].chat_id;
    //}else {
     //   const name = crypto.randomBytes(20).toString('hex') + "hola";
      //  console.log(name);
      //  data.chat = await chatModel.add(name);
      //  if (data.chat.affectedRows >= 1) {
       //     chat_id = data.chat.insertId;
      //      console.log({ "Reintento": chat_id });
      //  }else{
       //     console.error(data.chat);
      //  }
    //}
    
    //console.log({ "1": data.chat, "2": chat_id });
    


    let newMessage = {
        "chat_id": chat_id,
        "user_send_id": idUserLoggedIn,
        "user_recive_id": idUser,
        "text": text
    }

    console.table(newMessage);
    let added = await messageModel.add(newMessage);
    console.log(added)

    req.flash('success', 'Se envió el mensaje' + text);
    res.redirect('./'+idUser)
    
}

module.exports = { list, listAll, findChat, add };