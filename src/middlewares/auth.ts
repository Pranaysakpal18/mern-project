import { Request,Response,NextFunction } from "express";
import  jwt  from "jsonwebtoken";


//Extend Request object to add "user" info
export interface AuthRequest extends Request{
    user?:{id:string};
}

export const authMiddleware=(
    req:AuthRequest,
    res:Response,
    next:NextFunction
)=>{

    //1.Token header Lekar aao
    const authHeader=req.headers.authorization;

    //2.Agar token missing ya format galat hai
    if(!authHeader || !authHeader.startsWith("Bearer ")){
        return res.status(401).json({message:"No token provided"});
    }


    //3.Token extract karo
    const token=authHeader.split(" ")[1];

    try{
        //4.Token verify karo ->decoded user id milti hai
        const decoded=jwt.verify(
            token,
            process.env.JWT_SECRET as string
        ) as {id :string};

        //5.req.user me user id store kar do
         req.user ={id:decoded.id};


         //6.All good =>next controller run karega
    next();
    }catch(error){
        return res.status(401).json({message:"Invalid token"})
    }

}