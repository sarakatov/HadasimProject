import {
     getNumUsersSickThisMonth
} from "../controller/bonus.js";
import express from "express";

const router=express.Router();
router.get("/getNumUsersSickThisMonth",getNumUsersSickThisMonth)  
  

 
export default router;