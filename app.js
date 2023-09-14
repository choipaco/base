const express = require('express');
const app  = express();
const routes = require("./src/routes/");
require('dotenv').config()

app.use(routes);




app.listen(process.env.PORT,()=>{
    console.log('serverOn!');
});

module.exports = app;