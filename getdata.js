const express = require('express');
const path = require('path');

const app = express();

const publicpath = path.join(__dirname,'public');


app.use(express.static(publicpath))
console.log(publicpath);


app.listen(5000)