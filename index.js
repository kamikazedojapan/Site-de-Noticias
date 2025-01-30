const express = require("express");
const userRoute = require('./src/routes/user.route') 
const app = express();

app.use("/perguntar-nome", userRoute)

app.listen(3000)

