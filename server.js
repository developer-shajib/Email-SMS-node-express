const express = require('express');
const dotenv = require('dotenv');
const expressLayout = require('express-ejs-layouts');
const userRouter = require('./routers/userRouter');
const path = require('path');
//config dotenv
dotenv.config();
const port = process.env.PORT || 4000;

//init express
const app = express();

//get form data 
app.use(express.json());
app.use(express.urlencoded({extended:false}));


//ejs engine
app.set('view engine', 'ejs');
app.use(expressLayout);
app.set('layout', 'layouts/app');

//static folder
app.use(express.static(path.join(__dirname, './public') ));


//init router
app.use( '/user',userRouter)

//server listen
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})