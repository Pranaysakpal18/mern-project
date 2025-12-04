import { Router } from "express";
import pingRoutes from "../routes/ping.routes"
import userRoutes from "../routes/user.routes"


const router=Router();

router.use("/ping",pingRoutes),
router.use("/users",userRoutes)


export default router;