const express = require('express');
const router = express.Router();


const goats = [
    {
        "id": 1,
        "name": "t-rex"
    },
    {
        "id": 2,
        "name": "connie"
    },
    {
        "id": 3,
        "name": "clyde"
    }
    ]
router.get('/', (req, res) =>{
   res.json(goats);
})

router.get('/:id', (req, res) =>{
    console.log(req.params.id);
    let selectedGoat = null;
    goats.forEach((goat)=>{
    if(goat.id == req.params.id)
    {
        selectedGoat = goat;
    }
    });

   res.send(selectedGoat);
})

router.delete('/:id', (req, res) =>{
    console.log("Delete the code with id "+req.params.id);
    res.send("Deleted goat");
})

module.exports = router;