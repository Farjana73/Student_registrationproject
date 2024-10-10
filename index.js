import express from "express";
import mongoose from "mongoose";
import router from "./app/routes/api.js";
import cookieParser from "cookie-parser";

const app = express();
const PORT = 5500;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


;(async()=>{
    try {
       await mongoose.connect('mongodb+srv://test123:test123@cluster0.4loft.mongodb.net/StudentRegistration',{ autoIndex: true }) ;
      console.log('mongoDB connected successfully');
    } catch (error) {
        console.log(error)
    }
})();

app.use('/api',router);

app.listen(PORT,()=>{
    console.log(`server running success at port :: ${PORT}`);
})