import 'dotenv/config';
import express from "express"
const app = express()
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post('/user',(req,res)=>{
    try{
        let {username,email,pass} = req.body;
        res.status(200).send(`Username : ${username} | Email :  ${email} | Password : ${pass}`);
    }catch(err){
        res.status(400).send('Error From Server...')
    }
})
app.listen(process.env.PORT,()=>console.log('Mount Event Server Running...',process.env.PORT))