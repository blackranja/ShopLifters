require ('./db/connect');
const express = require('express');
const app = express();
const products = require('./routes/products');
const connect = require('./db/connect');
//Middleware 
app.use(express.json());
app.use('/api/v1/products',products);
const port = 3000;
