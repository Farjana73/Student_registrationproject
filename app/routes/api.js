import express from "express";
import { studentRegistration,studentLogin,readProfile,updateProfile } from "../controllers/userController.js";
import { authVerify } from "../middlewares/authMiddleware.js";
import { readFile, uploadFile,deleteFile } from "../controllers/fileController.js";

const router =express.Router();


//student api
router.post('/studentRegistration',studentRegistration);
router.post('/studentLogin',studentLogin);
router.get('/readProfile',authVerify,readProfile);
router.post('/updateProfile',authVerify,updateProfile);

//file api
router.post('/upload',uploadFile);
router.get('/read/:filename', readFile); 
router.delete('/delete/:filename', deleteFile); 

export default router