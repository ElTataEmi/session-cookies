const path = require("path")
const express = require("express")
const router = express.Router()

const otherRoutes = require("../controllers/other")

router.get("/register", otherRoutes.register) 
