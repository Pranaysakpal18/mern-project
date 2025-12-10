import { Request,Response } from "express"
import { createUserService } from "../services/user.services";

export const getUsers=(req:Request,res:Response)=>{
    res.json({message:"user routes Working!"});

};


export const createUser=(req:Request,res:Response)=>{
    const {name,age}=req.body;

    //simple validation
    if(!name || !age){
        return res.status(400).json({
            success:false,
            message:"Name and Age are required"
        });
    }


    //call service (currently just returning data)
    const user=createUserService({name,age});

    res.status(201).json({
        success:true,
        message:"user created successfully!",
        data:user
    })



}