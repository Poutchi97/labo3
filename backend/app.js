const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const animeRoutes = require('./routes/anime')
const userRoutes = require('./routes/user')
const path = require('path');


mongoose.connect(process.env.DB_KEY,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connection à mongodb réussie'))
    .catch(() => console.log('Connection à mongodb echouée'));

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});



app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/anime', animeRoutes);
app.use('/api/auth', userRoutes)


module.exports = app;


