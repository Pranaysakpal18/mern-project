import { Router,Request,Response } from "express";

const router =Router();

router.get("/",(req:Request,res:Response)=>{
    res.json({message:"Backend is running!"})

})

export default router;