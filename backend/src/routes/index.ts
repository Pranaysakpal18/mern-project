import { Router } from "express";
import pingRoutes from "../routes/ping.routes"
import userRoutes from "../routes/user.routes"
import authRoutes from "../routes/auth.routes"


const router=Router();

router.use("/ping",pingRoutes),
router.use("/users",userRoutes),
router.use("/auth",authRoutes)


export default router;