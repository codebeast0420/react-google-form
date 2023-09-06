import express from "express";
import mongoose from "mongoose";
import http from 'http'
import userRoute from './Routes/userRoute.mjs'
import formRoute from './Routes/formRoute.mjs'
import 'dotenv/config.js'
import createHttpError, { isHttpError } from 'http-errors';
import cors from 'cors'

const app = express();


const server = http.createServer(app)
app.use(express.json())
app.use(cors())

app.use('/api/user',userRoute)
app.use('/api/form',formRoute)

app.use((req,res,next)=>{
    next(createHttpError(404,"Endpoint not found"))
})
app.use((error, req, res, next) => {
    let errorMessage = "An unknown error occured "
    let statusCode = 500;
    if (isHttpError(error)) {
        statusCode = error.status;
        errorMessage = error.message;
    }
    res.status(statusCode || 500).json({ error: errorMessage || "unknown error" })
})

const port = process.env.PORT
mongoose.connect(process.env.DB_STRING,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(() => {
    try {
        server.listen(port, () => {
            console.log(`server connected to http://localhost:${port}`);
        })
    } catch (error) {
        console.log('cannot connect to the server');
    }
}).catch(error => {
    console.log('Invalid Database Connection...!')
})