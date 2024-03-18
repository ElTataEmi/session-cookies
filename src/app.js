const express = require("express"); // 1 instale expres (node_modules, package(lock).json)
const path = require("path");
const fs = require("fs");
const port= 3000;

const router = express.Router();
const app = express();


// CONFIG

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'))


// MIDDLEWARE
app.use(express.static(path.join(__dirname, '../public')));


// ROUTES
const otherRoutes = require('./routes/register.routes')


// ROUTERS
app.use('/register', otherRoutes);



app.listen(port,console.log(`http//localhost:${port}`))



