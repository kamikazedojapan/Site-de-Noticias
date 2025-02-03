const express = require("express");
const userRoute = require('./src/routes/user.route'); 
const connectDatabase = require("./src/database/db");

const port = 3000
const app = express();

connectDatabase()
app.use(express.json())
app.use("/", userRoute)

app.listen(port, () => console.log(`Server running in http://localhost:${port}`))

