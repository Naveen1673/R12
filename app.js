require("dotenv").config({path:"./.env"});
const express = require('express');
const app = express();

//const dotenv = require("dotenv");
//dotenv.config({path: "./.env"});

const PORT = process.env.PORT;

const conn = require("./models/dbconfig");
conn.dbconnection();


app.listen(PORT, () => {
    console.log(`The Server is running on port ${PORT}!`);
});