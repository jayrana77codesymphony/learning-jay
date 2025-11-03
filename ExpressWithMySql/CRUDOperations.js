import express from 'express';
import database from './DatabaseConnect.js';

const app = express();
const port = 5000;
app.use(express.json())
app.get('/createTable', (req, res) => {
    try {
        const tableDetail = `create table if not exists userDetails(
                id int auto_increment primary key,
                firstName varchar(50) not null,
                lastName varchar(50) not null,
                middleName varchar(50) not null,
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
        const selectQuery = `select * from userDetails`
        database.query(selectQuery, (error, data) => {
            if (data) res.json({ status: 200, message: "Data Fetched Successfully...", data: data });
            else res.json({ status: 404, message: 'Data Not Found!!!' });
        })
    } catch (error) {
        res.json({ status: 500, message: 'Error from Server!!!' })
    }
});

app.get('/users/:id', (req, res) => {
    try {
        const id = Number(req.params.id);
        const selectQuery = `select * from userDetails where id=${id}`
        database.query(selectQuery, (error, data) => {
            if (error) res.json({ status: 500, message: 'Database Error!' });
            else if (data.length === 0) {
                res.json({ status: 404, message: 'User Not Found!!!' });
            }
            else res.json({
                status: 200, message: "User Data Fetched Successfully...", user: {
                    id: data[0].id,
                    firstName: data[0].firstName,
                    lastName: data[0].lastName,
                    middleName: data[0].middleName,
                    email: data[0].email,
                    password: data[0].password
                }
            })
        })
    } catch (error) {
        res.json({ status: 500, message: 'Error from Server!!!' })
    }
});

app.post('/insertUserFromBody', (req, res) => {
    try {
        const { firstName, lastName, middleName, email, password } = req.body;
        const insertQuery = `insert into userDetails(firstName,lastName,middleName,email,password) values(?,?,?,?,?)`
        database.query(insertQuery, [firstName, lastName, middleName, email, password], (error) => {
            if (error) res.json({ status: 400, message: 'Error Inserting User!!!' });
            else res.json({ status: 200, message: "User Inserted Successfully...", user: values });
        })
    } catch (error) {
        res.json({ status: 500, message: 'Error from Server!!!' })
    }
})

app.post('/insertUserFromAPI/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);
        const response = await fetch('https://dummyjson.com/users')
        const data = await response.json();
        const user = await data.users.find(user => user.id == id);
        const insertQuery = `insert into userDetails(firstname,lastname,middlename,email,password) values(?,?,?,?,?)`
        const values = [user.firstName, user.lastName, user.maidenName, user.email, user.password]
        database.query(insertQuery, values, (error) => {
            if (error) res.json({ status: 400, message: 'Error Inserting User!!!' });
            else res.json({ status: 200, message: "User Inserted Successfully...", user: values });
        })
    } catch (error) {
        res.json({ status: 500, message: 'Error from Server!!!' })
    }
});

app.put('/updateUser/:id', (req, res) => {
    try {
        const id = Number(req.params.id)
        const { firstName, lastName, middleName, email, password } = req.body;
        const updateQuery = `update userDetails set firstName=?,lastName=?,middleName=?,email=?,password=? where id=${id}`
        database.query(updateQuery,[ firstName, lastName, middleName, email, password ], (error, data) => {
            if (error) res.json({ status: 500, message: 'Database Error!' });
            else if (data.affectedRows === 0) {
                return res.status(404).json({ status: 404, message: 'User Not Found!' });
            }
            else {
                res.status(200).json({
                    status: 200, message: 'User Updated Successfully...', user: {
                        id: id,
                        firstName: firstName,
                        lastName: lastName,
                        middleName: middleName,
                        email: email,
                        password: password
                    }
                });
            }
        })
    } catch (error) {
        res.json({ status: 500, message: 'Error from Server!!!' })
    }
})

app.delete('/deleteUser/:id', (req, res) => {
    try {
        const id = Number(req.params.id);
        const deleteQuery = `delete from userDetails where id=${id}`
        database.query(deleteQuery, (error, data) => {
            if (error) res.json({ status: 500, message: 'Error From Query!!!' });
            if (data.affectedRows > 0) {
                res.status(200).json({ status: 200, message: 'User Deleted Successfully...', deletedId: id });
            } else {
                res.status(404).json({ status: 404, message: 'User Not Found!!!' });
            }
        })
    } catch (error) {
        res.json({ status: 500, message: 'Error from Server!!!' })
    }
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});