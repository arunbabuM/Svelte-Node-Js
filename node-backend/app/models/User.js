const {
    client
} = require("../config/db.js")


module.exports = class User {

    // static getAllUsers() {
    //     return client.query('SELECT * FROM users');
    // }

    // static GetUserByID(id) {

    //     return client.query('SELECT * FROM users WHERE id=$1', [id]);

    // }

    // static GetUserByUserName(userId) {

    //     return client.query('SELECT * FROM users WHERE username=$1', [userId]);

    // }
    // static insertUser(user) {

    //     return client.query(`INSERT INTO users(username,password_hash,email,first_name,last_name,phone_number) VALUES($1,$2,$3,$4,$5,$6)`, [user.username, user.password_hash, user.email, user.first_name,user.last_name,user.phone_number]);
    // }

    // static updateUser(user) {

    //     return client.query(`UPDATE users SET username=$1, email=$2, profile_url=$3 WHERE id=$4`, [user.username, user.email, user.profile_url, user.id]);

    // }

    // static updatePassword(user) {

    //     return client.query(`UPDATE users SET password=$1 WHERE id=$2`, [user.password, user.id]);

    // }

    // static deleteUser(id) {

    //     return client.query(`DELETE FROM users WHERE id=$1`, [id])
    // }


    static insertLogin(userlogin){
        return client.query('insert into userlogin (username,password,email) values ($1,$2,$3)',[userlogin.username,userlogin.password,userlogin.email]);
    }
}