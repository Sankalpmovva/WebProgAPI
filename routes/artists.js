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

router.delete('/:id', (req, res) =>{
    //ToDo: link to database
   res.send("[DELETE] delete an artist");
})

//--------------
// Update artist
//-------------

router.put('/:id', (req, res) =>{
    //ToDo: link to database
   res.send("[PUT] update an artist");
})

module.exports = router;