const pool = require('../database');







async function list(req) {
    console.log("");


    let sql = 'SELECT chats.* FROM chats';
    if (req !== null && req !== undefined && req.id > 0) {
        sql += ' WHERE id = ' + req.id
    }
    const chat = await pool.query(sql);
    return chat;
}


async function findChat(idUser, idUserLoggedIn, limit) {
    console.log("Buscando chat " + idUser +' - '+ idUserLoggedIn);
    let sql = 'SELECT	chats.id, chats.`name` AS chat_name, messages.user_send_id, messages.user_recive_id, messages.text, messages.chat_id, messages.created_at, `user`.`name` AS name_user_send FROM chats INNER JOIN messages ON chats.id = messages.chat_id INNER JOIN `user` ON messages.user_send_id = `user`.id ';

    //if (idUser !== null && idUser !== undefined && idUser > 0 && idUserLoggedIn !== null && idUserLoggedIn !== undefined && idUserLoggedIn > 0) {
        //sql += ' WHERE ( messages.user_send_id = ' + idUser + ' OR messages.user_recive_id = ' + idUser + ' ) ';
        //sql += ' AND ( messages.user_send_id = ' + idUserLoggedIn + ' OR messages.user_recive_id = ' + idUserLoggedIn + ' ) '
    //}

    if (limit  !== null && limit !== undefined && limit > 0){
        sql += ' LIMIT ' + limit;
    }

    console.log(sql);

    const chat = await pool.query(sql);
    return chat;
}

async function listMessage(req) {
    console.log("listando message");

    

    let sql = 'SELECT `user`.`name`, messages.text, messages.chat_id, messages.id FROM messages INNER JOIN `user` ON messages.user_send_id = `user`.id';
    if (req !== null && req !== undefined && req.id > 0) {
        sql += ' WHERE chat_id = ' + req.id
    }
    const message = await pool.query(sql);
    return message;
}


async function add(name) {
    const chat = await pool.query('INSERT INTO chats SET ?', {name: name});
    return chat;
}

module.exports = { list, findChat, add, listMessage };