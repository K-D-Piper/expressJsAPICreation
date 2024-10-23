//? IMPORTING OUR PACKAGES 
const express = require('express');

//? This is creating an "express" APP
const app = express();
const port = 4000;
const router = require('./app/routes/router')

//app.get('/europe', (req, res) => {
//    res.send('What da bloodly hell')
// })

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
})

app.use('/api' , router);