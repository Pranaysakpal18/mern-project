import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// import router from "./routes/ping.routes";
import routes from "./routes"


dotenv.config();  //.env variable load karta hai 



const app=express();



//agar .env me PORT set hai use karo nahi to default 5000 port use karo
const PORT =process.env.PORT || 5000;



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
