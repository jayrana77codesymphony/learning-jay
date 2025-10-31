import 'dotenv/config';
import express from "express"
const app = express()
const router = express.Router()
const router1 = express.Router()
router.get('/router',(req,res)=>{
    console.log('Hello from router');
    res.end();
})
router1.get('/router1',(req,res)=>{
    console.log('Hello from router1');
    res.end();
})
app.use(router);
app.use(router1);
app.listen(process.env.PORT,()=>console.log('Router Server Running...',process.env.PORT))