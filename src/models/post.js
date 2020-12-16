const pool = require('../database');







async function list(req) {
    console.log("modelo listando chat");

    let sql = 'SELECT posts.* FROM posts';
    if (req !== null && req !== undefined && req.id > 0) {
        sql += ' WHERE id = ' + req.id
    }
    const chat = await pool.query(sql);
    return chat;
}
async function listMessage(req) {
    console.log("modelo listando message");

    //let sql = 'SELECT *, `user`.`name`, messages.text, messages.chat_id,  messages.id FROM messages 	INNER JOIN 	`user` ON messages.user_send_id = `user`.id';
    //if (req !== null && req !== undefined && req.id > 0) {
       // sql += ' WHERE chat_id = ' + req.id
    //}
    //const message = await pool.query(sql);
   // return message;
}

async function add(req) {
    const chat = await pool.query('INSERT INTO posts set ?', [req]);
    return chat;
}

module.exports = { list, add, listMessage};