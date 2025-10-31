import 'dotenv/config';
import express from 'express';
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/user',(req,res)=>{
    let {username,email,pass} = req.body;
    console.log(`Username : ${username} | Email :  ${email} | Password : ${pass}`);
    res.json({username,email,pass})
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
