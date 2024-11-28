const dotenv=require('dotenv')
dotenv.config();

const express=require('express')
const app=express()
const userRoutes=require('./Routes/userRoutes')
const cors=require('cors')
const dbx=require('./Db/db');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    res.send('hello world')
});
app.use('/user',userRoutes);


module.exports=app;