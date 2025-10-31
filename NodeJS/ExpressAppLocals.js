import 'dotenv/config';
import express from "express"
const app = express()
app.locals.name = "Jay"
app.locals.email = "jay@example.com"
app.locals.password = "jay#123"
app.get('/',(req,res)=>{
    console.log(
        "Name:",app.locals.name,"\n",
        "Email:",app.locals.email,"\n",
        "Password:",app.locals.password);
    res.end();
})

app.listen(process.env.PORT,()=>console.log('App Locals Server Running...',process.env.PORT))