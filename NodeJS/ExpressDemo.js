import data from "./data.json" with { type: 'json' }
// console.log(data);

import express from "express"

// import fs from "fs"

const app = express()
// app.get('/user/:id/:name',(req,res)=>{})



// --------------------------- Using es module -------------------------------

app.get('/user/:id', (req, res) => {
    // console.log(req.params.id,req.params.name);
    const userID = req.params.id;
    // console.log(userID);
    // res.send(userID);
    const user = data.find(usr => String(usr.id) === userID);
    // console.log(user);
    if (user) {
        res.send(user);
    } else {
        res.send('Error Finding User...')
    }
    // console.log(res.send('Error Finding User...'))
})

app.get('/user', (req, res) => {
    const pageno = +req.query.pageno;
    if (pageno) {
        const recordLimit = 10;
        const start = (pageno - 1) * recordLimit;
        const pagedData = data.slice(start, start + recordLimit);
        res.send(pagedData);
    } else {
        res.send(data);
    }
})




// -------------------Using file system module -------------------------

// app.get('/user', (req, res) => {
//     const pageno = +req.query.pageno;
//     fs.readFile('data.json', 'utf8', (err, fdata) => {
//         const data = JSON.parse(fdata);
//         try {
//             if (pageno) {
//                 const recordLimit = 10;
//                 const start = (pageno - 1) * recordLimit;
//                 const pagedData = data.slice(start, start + recordLimit);
//                 res.send(pagedData);
//             } else {
//                 res.send(data);
//             }
//         }catch(err){
//             res.send(err);
//         }
//     })
// })

// app.get('/user/:id', (req, res) => {
//     const userID = req.params.id;
//     fs.readFile('data.json', 'utf8', (err, fdata) => {
//         if (err) console.log(err);
//         try {
//             const data = JSON.parse(fdata);
//             const user = data.find(usr => String(usr.id) === userID);
//             // console.log(user);
//             if (user) {
//                 res.send(user);
//             } else {
//                 res.send('Error Finding User...')
//             }
//         }catch(err){
//             res.send(err);
//         } 
//     })
//     // console.log(userID);
//     // res.send(userID);

//     // console.log(res.send('Error Finding User...'))
// })




app.listen(5000, () => console.log('Server Running on PORT - 5000... '))