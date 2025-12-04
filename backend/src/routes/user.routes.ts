import { Router } from "express";

const router=Router();

//Get Users
router.get("/",(req,res)=>{
    res.json({
        message:"user route Working!"
    })
})


//post /users
router.post("/",(req,res)=>{
    const data =req.body;

    res.json({
        success:true,
        message:"user created successfully!",
        data:data
    })
})






export default router;