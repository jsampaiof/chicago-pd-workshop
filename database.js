import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

async class subscribers{}

async function getSubscribers(){
    const [response] = await pool.query(
        `SELECT * 
        FROM subscribers`
    );
    return response;
}

async function setSubscribers(personName, email, phone){
    const setSub = await pool.query(
        `INSERT INTO subscribers(personName, email, phone)
        VALUES(?, ?, ?)`, [personName, email, phone]
    );
    // console.log('data sent');
};

export {getSubscribers ,setSubscribers };

const getsubs = await getSubscribers();
console.log(getsubs);