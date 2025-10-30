import 'dotenv/config';
import express from "express"
import cookieParser from "cookie-parser"
const app = express()
app.use(cookieParser())
app.get('/set-cookie',(req,res)=>{
    try{
        const cookieValue = "Jay99";
        res.cookie('jayCookie',cookieValue)
        res.status(200).send(`Cookie is Created...`);
    }catch(err){
        res.status(400).send('Error From Server...')
    }
})
app.get('/get-cookie',(req,res)=>{
    try{
        const val = req.cookies.jayCookie;
        if(val){
            res.status(200).send(`Cookie is : ${val}`);
        }else{
            res.status(400).send('No Cookie Found');
        }
    }catch(err){
        res.status(400).send('Error From Server...')
    }
})
app.get('/delete-cookie',(req,res)=>{
    try{
        res.clearCookie('jayCookie');
        res.status(200).send(`Deleted Cookie : ${req.cookies.jayCookie}`);
    }catch(err){
        res.status(400).send('Error From Server...')
    }
})
app.listen(process.env.PORT,()=>console.log('Cookie Server Running...',process.env.PORT))