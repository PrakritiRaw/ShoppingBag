import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';

//configuring the environment variable file
dotenv.config();

//database configuration
connectDB(); //calling the connectDB function to connect to the database

//rest object
const app = express(); //creating the express object to use the express methods

//middlewares
app.use(express.json()); //this will allow us to accept json data in the body
app.use(morgan('dev')); //this will log the request in the console

//rest api
app.get('/',(req,res)=>{
   //with the help of this we are sending the response to the client
   res.send({       
    //sending the json object
    message:'Welcome'
})
})

//PORT getting port from .env file
const  PORT = process.env.PORT || 3002;

//listening the port
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`.bgCyan.white);
});
