
import 'dotenv/config'

import express from "express";
import cors from "cors";

const app = express();
const port =  process.env.PORT
app.use(express.json());
// MongoDB connection
import connectToDatabase from "./config/connect.js";
connectToDatabase();

// Middleware
app.use(cors());


app.get('/',(req,res)=>{
  res.json({message:'Hello'})
})

// Routes
import tasksRouter from "./router/tasks.js";
import authRouter from "./router/auth.js";

app.use("/tasks", tasksRouter);
app.use("/auth", authRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

