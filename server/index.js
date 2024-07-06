import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import route from "./routes/userRoute.js"
import cors from 'cors'
// const cors = require('cors')

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}
const app = express ();
// app.use(cors)
app.use(cors(corsOptions)) 
app.use(bodyParser.json());
// app.use(express.json());


dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL; 

mongoose.connect(MONGOURL).then(()=>{
    console.log("Database connected Successfully.")
    app.listen(PORT, ()=>{
        console.log(`Server is running on port : ${PORT}`)
    })
}).catch(error => console.log(error));

app.use("/api/user", route)