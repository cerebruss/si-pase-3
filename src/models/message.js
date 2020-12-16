const pool = require('../database');





async function list(req) {
    let sql = 'SELECT *,  `user`.`name`, messages.text,  messages.id FROM messages 	INNER JOIN 	`user` ON messages.user_send_id = `user`.id';
    if (req !== null && req !== undefined && req.id > 0) {
        sql += ' WHERE chat_id = ' + req.id
    }
    const message = await pool.query(sql);
    return message;
}



async function add(fields) {
    const chat = await pool.query('INSERT INTO messages set ?', [fields]);
    return chat;
}

module.exports = { list, add };