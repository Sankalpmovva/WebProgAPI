const express = require('express');
const router = express.Router();

//--------------
// Post votes
//--------------
router.post('/', (req, res) =>{
    //ToDo: link to database
   res.send("[POST] votes");
})


module.exports = router;