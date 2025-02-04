import express from "express";
import connectDatabase from "./src/database/database.js";
import userRoute from './src/routes/user.route.js'; 

const port = 3000
const app = express();

connectDatabase()
app.use(express.json())
app.use("/", userRoute)

app.listen(port, () => console.log(`Server running in http://localhost:${port}`))

