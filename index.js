import express from "express";
import connectDatabase from "./src/database/database.js";
import userRoute from "./src/routes/user.route.js"; 
import authRoute from "./src/routes/auth.route.js";
import dotenv from 'dotenv';

dotenv.config()

const port = process.env.PORT
const app = express();

connectDatabase()
app.use(express.json())
app.use("/", userRoute)
app.use("/auth", authRoute)

app.listen(port, () => console.log(`Server running in http://localhost:${port}`))

