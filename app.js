const express = require('express')
const mongoose = require('mongoose')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');
 //Middle layers
 app.use(cors());
app.use(bodyParser.json());

//Import Routes 
const postRoute = require('./router/posts');

app.use('/posts', postRoute);

// ROUTES
app.get('/',(req,res)=> {
    res.send('We are on home');
})



mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true,useUnifiedTopology: true } ,
    ()=> console.log('Connected to db')
);

app.listen(3000);