
const express = require("express");
const app = express();

const dotenv = require("dotenv").config();
const http = require('http');
const path = require('path');


app.use(express.json());
app.use(express.static(path.join(__dirname, './build/web')));

//allows multiple http request anywhere
//app.use(cors());




//Public files
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "/upload")));

//App listener
app.listen(process.env.APP_PORT, () => 
  console.log(`your server is on port ${process.env.APP_PORT}`)
  );