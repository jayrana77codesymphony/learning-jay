import data from "./data.json" with {type:'json'};
import express from "express"
// console.log(data);

// const express = require('express')
// const data = require('./data.json')

const app = express()
app.use(express.json())

// app.get('/user/:id/:name',(req,res)=>{
app.get('/user/:id',(req,res)=>{
    // console.log(req.params.id,req.params.name);
    const userID = req.params.id;
    // console.log(userID);
    // res.send(userID);
        const user = data.find(usr => String(usr.id) === userID);
        // console.log(user);
        if(user){
            res.json(user);
        }else{
            res.send('Error Finding User...')
        }
        // console.log(res.send('Error Finding User...'))
})

app.get('/user',(req,res)=>{
    const pageno = parseInt(req.query.pageno);
    if(pageno){
        const recordLimit = 10;
        // console.log(page-1);

        const start = (pageno - 1) * recordLimit;
        // console.log(start);

        const end = start + recordLimit;
        // console.log(end);
    
        const pagedData = data.slice(start, end);
        res.json(pagedData);
    }else{
        res.json(data);
    }
})

// app.get('/paging', (req, res) => {
//     const pageno = parseInt(req.query.pageno) || 1; 
//     const limit = 10; 
//     // console.log(page-1);

//     const start = (pageno - 1) * limit;
//     // console.log(start);

//     const end = start + limit;
//     // console.log(end);

//     const pagedData = data.slice(start, end);
//     res.json(pagedData);
// });

app.listen(5000)