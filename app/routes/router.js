//? IMPORT express package 
const express = require('express');




const router = express.Router();



router.use('/restaurants' , require('./api/restroutes'))


module.exports = router; 