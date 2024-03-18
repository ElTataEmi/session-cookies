const express = require("express"); // 1 instale expres (node_modules, package(lock).json)
const path = require("path");
const fs = require("fs");
const port= 3000;

const router = express.Router();
const app = express();


app.listen(port,console.log(`http//localhost:${port}`))

app.get("/",(req,res)=> res.sendfile("./register.html"))

