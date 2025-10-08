const express = require('express');
const router = express.Router();

//--------------
// Get songs
//--------------
router.get('/', (req, res) =>{
    //ToDo: link to database
   res.send("[Get] all the songs");
})

//--------------
// Add songs
//-------------

router.post('/', (req, res) =>{
    //ToDo: link to database
   res.send("[POST] add a new song");
})

//--------------
// Delete songs
//-------------

router.delete('/:id', (req, res) =>{
    //ToDo: link to database
   res.send("[DELETE] delete a song");
})


module.exports = router;