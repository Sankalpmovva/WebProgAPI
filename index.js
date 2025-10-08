const express = require("express");

const app = express();

app.get('/', (req, res) =>{
    res.send('Hello world!');
})
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
app.get('/goats', (req, res) =>{
   res.json(goats);
})

app.get('/goats/:id', (req, res) =>{
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

app.delete('/goats/:id', (req, res) =>{
    console.log("Delete the code with id "+req.params.id);
    res.send("Deleted goat");
})

console.log("...Server is running");
app.listen(3200);