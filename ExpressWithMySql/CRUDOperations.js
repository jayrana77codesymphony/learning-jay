import express from 'express';
import database from './DatabaseConnect.js';

const app = express();
const port = 5000;
app.get('/createTable', (req, res) => {
    try {
        const tableDetail = `create table if not exists usersDetail(
                id int auto_increment primary key,
                firstname varchar(50) not null,
                lastname varchar(50) not null,
                middlename varchar(50) not null,
                email varchar(100) not null,
                password varchar(100) not null
            );`
        database.query(tableDetail, (error) => {
            if (error) res.json({ status: 400, message: 'Error Creating Table!!!' });
            else res.json({ status: 200, message: "Table Created Successfully..." });
        })
    } catch (error) {
        res.json({ status: 500, message: 'Error From Server!!!' })
    }
});

app.get('/users', async (req, res) => {
    try {
        const selectQuery = `select * from usersdetail`
        database.query(selectQuery, (error, data) => {
            if (data) res.json({ status: 200, message: "Data Fetched Successfully...", data: data });
            else res.json({ status: 404, message: 'Data Not Found!!!' });
        })
    } catch (error) {
        res.json({ status: 500, message: 'Error from Server!!!' })
    }
});

app.get('/users/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const selectQuery = `select * from usersdetail`
        database.query(selectQuery, (error, data) => {
            const user = data.find(user => user.id === id)
            if (user) res.json({ status: 200, message: "User Data Fetched Successfully...", data: user })
            else res.json({ status: 404, message: 'User Not Found!!!' });
        })
    } catch (error) {
        res.json({ status: 500, message: 'Error from Server!!!' })
    }
});

app.post('/insertUser/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await fetch('https://dummyjson.com/users')
        const data = await response.json();
        const user = await data.users.find(user => user.id == id);
        const insertQuery = `insert into usersdetail(firstname,lastname,middlename,email,password) values(?,?,?,?,?)`
        const values = [user.firstName, user.lastName, user.maidenName, user.email, user.password]
        database.query(insertQuery, values, (error) => {
            if (error) res.json({ status: 400, message: 'Error Inserting User!!!' });
            else res.json({ status: 200, message: "User Inserted Successfully...", user: values });
        })
    } catch (error) {
        res.json({ status: 500, message: 'Error from Server!!!' })
    }
});

app.put('/updateUser',(req,res)=>{
    
})

app.delete('/deleteUser/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const deleteQuery = `delete from usersdetail where id=${id}`
        database.query(deleteQuery, (error, data) => {
            if (error) res.json({ status: 500, message: 'Error From Query!!!' });
            if (data.affectedRows > 0) {
                res.status(200).json({status: 200,message: 'User Deleted Successfully...',deletedId: id});
            } else {
                res.status(404).json({status: 404,message: 'User Not Found!!!'});
            }
        })
    } catch (error) {
        res.json({ status: 500, message: 'Error from Server!!!' })
    }
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});