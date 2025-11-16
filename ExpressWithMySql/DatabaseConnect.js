import mysql from 'mysql'

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    pass:'',
    database:'learning_jay'
})

connection.connect((error)=>{
    if(error) console.log("Connection Failed!",error);
    else console.log("Connection Success...");
})

export default connection;