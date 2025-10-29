const express = require('express');
const router = express.Router();

const {PrismaClient} = require("../generated/prisma");
const prisma = new PrismaClient();

//week 5

//--------------
// Get artist
//--------------
router.get('/', async (req, res) =>{
    //ToDo: link to database
    let artists = await prisma.artists.findMany();
   res.send(artists);
})

//--------------
// Add artist
//-------------

router.post('/', async (req, res) =>{
   
    const checkArtist = await prisma.artists.findMany(
        {
            where:{
                name: req.body.name
            }
        }
    );

    if(checkArtist.length >0)
    {
        res.json({
            "status": "Artist name already exists"
        })
    } else{
        const newArtist = await prisma.artists.create({
            data:{
                name:req.body.name
            }
        });

        res.json(newArtist);
    }



//    const newArtist = await prisma.artists.create(
//     {
//         data:{
//             name:req.body.name
//         }
//     }
//    );
//    console.log(newArtist);
//     console.log(req.body);
//    res.send("[Post] new artist");
})

//--------------
// Delete artist
//-------------

router.delete('/:id',async (req, res) =>{
    
   const deletedArtistId = req.params.id;
   const deleteArtist = await prisma.artists.delete({
    where:{
        artist_id:parseInt(deletedArtistId)
    }
   });
   res.json(deleteArtist);

})

//--------------
// Update artist
//-------------

router.put('/:id', async(req, res) =>{
    
   const updatedArtistId = req.params.id;
   const updatedName = req.body.name;
   const updatedArtists = await prisma.artists.update({
    where:{
        artist_id:parseInt(updatedArtistId)
    },
   data:{
    name:updatedName
   }
});

   res.json(updatedArtists);
})

module.exports = router;