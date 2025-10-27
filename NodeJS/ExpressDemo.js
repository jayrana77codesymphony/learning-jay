import data from "./data.json" with {type:'json'};
// console.log(data);
import express from "express"
// const express = require('express')
// const data = require('./data.json')
// const exp = require('express')
const app = express()
app.use(express.json())
app.get('/user/:id',(req,res)=>{
    const userID = req.params.id;
    // console.log(userID);
    // res.send(userID);
        const user = data.find(usr => usr.id === userID);
        if(user){
            res.json(user);
        }else{
            res.send('Error Finding User...')
        }
})
app.get('/user',(req,res)=>{
    res.json(data);
})
app.listen(5000)