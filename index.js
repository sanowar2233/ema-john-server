const express= require('express')
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors=require('cors')
require('dotenv').config();
const app=express()
const port =process.env.PORT || 5000;

app.use(cors());
app.use(express.json());




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.jr3dxw2.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri)
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });








app.get('/', (req,res)=>{
    res.send('ema john ')
})

app.listen(port,()=>{
    console.log(`ema john runing on : ${port}`)
})