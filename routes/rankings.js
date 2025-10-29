const express = require('express');
const router = express.Router();

const {PrismaClient} = require("../generated/prisma");
const prisma = new PrismaClient();

//--------------
// Get ranking
//--------------
router.get('/', async(req, res) =>{
    //ToDo: link to database
   
})


module.exports = router;