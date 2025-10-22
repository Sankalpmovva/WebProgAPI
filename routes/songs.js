const express = require('express');
const router = express.Router();

const {PrismaClient} = require("../generated/prisma");
const prisma = new PrismaClient();

//--------------
// Get songs
//--------------
router.get('/', async(req, res) =>{
    //ToDo: link to database
    let songs = await prisma.songs.findMany({
        include:{
            artists: true
        }
    });

   res.json(songs);
})

//--------------
// Add songs
//-------------

router.post('/',async (req, res) =>{
    let artistId = req.body.artist_id;
    let songName = req.body.name;

    const newSong = await prisma.songs.create({
            data:{

                name:songName,
                artist_id: artistId
            }
        });

        res.json(newSong);





})

//--------------
// Delete songs
//-------------

router.delete('/:id', (req, res) =>{
    //ToDo: link to database
   res.send("[DELETE] delete a song");
})


module.exports = router;