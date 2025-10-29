const express = require('express');
const router = express.Router();

const {PrismaClient} = require("../generated/prisma");
const prisma = new PrismaClient();


//--------------
// Post votes
//--------------
router.post('/', async (req, res) =>{

    const songId = req.params.body;
    const points = req.params.body;

    const newVote = await prisma.votes.create({

        data: {
            song_id: parseInt(songId),
            points: parseInt(points)
        }
        
    });

    res.json(newVote);
 
})

//Get Votes

router.get('/', async (req, res) =>{
    //ToDo: link to database
    let votes = await prisma.votes.findMany();
   res.json(votes);
})


module.exports = router;