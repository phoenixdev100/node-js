const exp = require('express');
const app = exp();

const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());
app.use(exp.json());

app.get('/', (req,res)=>{
    res.send("Welcome to ecommerce backend app");
})

const PORT = 5000;

app.listen(5000)