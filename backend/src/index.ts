import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// import router from "./routes/ping.routes";
import routes from "./routes"
import { connectDB } from "./config/database";






dotenv.config();  //.env variable load karta hai 




//env value access
const MONGO_URI=process.env.MONGO_URI || "your_mongodb_uri_here";



const app=express();



//agar .env me PORT set hai use karo nahi to default 5000 port use karo
const PORT =process.env.PORT || 5000;



//connect Database
connectDB(MONGO_URI);




//middleware setup
//1.cors 
app.use(cors());
//2.backend JSON request body parse karta hai 
app.use(express.json());


//routes
app.use("/api",routes);


//start server
app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`)
});




app.get("/", (req, res) => {
  res.send("Welcome to Backend!");
});



