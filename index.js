"use strict";

const express = require("express");
const bodyParser = require('body-parser')
const myRounter = require("./myRouter");

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(myRounter);

const port = 9000;
app.listen(port, () => console.log("Server start"));
