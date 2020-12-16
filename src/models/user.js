const pool = require('../database');

async function list(id) {
    console.log("id = ");
    console.log(id);
    let sql = 'SELECT DISTINCT `user`.*,  rol.`name` as rol_name FROM `user` INNER JOIN rol ON `user`.rol_id = rol.id ';
    if (id != null && id > 0) {
        sql += ' WHERE roles.id = ' + id
    }
    const users = await pool.query(sql);
    return users;
}

async function findOneByEmail(req) {
    if (!req) throw errror;
    const user = await pool.query('SELECT * FROM `user` WHERE `email` = ?', [req], function (error, results) {
        if (error) throw error;
        console.log('Results: ', results[0]);
    });
    console.log(user);
    return user;
}

async function listAll() {
    // const users = await pool.query('SELECT users.*, roles.`name` as role_name, users.`name` as eps_name FROM users INNER JOIN roles ON users.role_id = roles.id INNER JOIN users ON users.eps_id = users.id ');
    const users = await pool.query('SELECT DISTINCT `user`.*,  rol.`name` FROM `user` INNER JOIN rol ON  `user`.rol_id = rol.id ');
    return users;
}

async function addUser(req) {
    const users = await pool.query('insert into users set ?', [req]);
    return users;
}

async function deleteUser(req) {
    const epss = await pool.query("delete FROM epss WHERE id =?", [req]);
    return epss;
}

// async function encryptPassword(password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
// }

// async function comparePassword(password) {
//     return bcrypt.compareSync(password, this.password);
// }

module.exports = { list, findOneByEmail, listAll, addUser, deleteUser };