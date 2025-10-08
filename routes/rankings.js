const express = require('express');
const router = express.Router();

//--------------
// Get ranking
//--------------
router.get('/', (req, res) =>{
    //ToDo: link to database
   res.send("[Get] rankings");
})


module.exports = router;