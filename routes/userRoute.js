const express = require('express')
const router = express.Router();
const user=require("../model/userModel.js")
const {home,createuser}=require("../controllers/userControllers.js")

router.get('/',home);

router.post("/create",createuser);

module.exports=router
