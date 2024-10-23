//? IMPORT express package 
const express = require('express');




const router = express.Router();



router.use('/biloxi' , require('./api/restroutes'))

router.use('/diningtype', require('./api/typeroutes'));

module.exports = router; 