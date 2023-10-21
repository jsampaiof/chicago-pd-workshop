import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise();

export class Subscribers{
    #personName;
    #email;
    #phone;
    constructor(personName, email, phone){
        this.#personName = personName;
        this.#email = email;
        this.#phone = phone;
    };
    
    static async getSubscribers(){
        try{
            const [response] = await pool.query(
                `SELECT * 
                FROM subscribers`
            );
            return response;
        }catch(error){
            console.error('Hey, we have some error here:', error);
        };
    };
    
    async setSubscribers(){
        const setSub = await pool.query(
            `INSERT INTO subscribers(personName, email, phone)
            VALUES(?, ?, ?)`, [this.#personName, this.#email, this.#phone]
        );
        console.log('data sent');
    };   
}

// const test = new Subscribers('subscribers', 'Felipe Medeiros', 'lipemdros01@gmail.com', '83995217536');
// const result = await Subscribers.getSubscribers()
// // const result = await test.setSubscribers()
// console.log(result);