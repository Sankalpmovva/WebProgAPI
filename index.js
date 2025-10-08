const express = require("express");

const app = express();

app.get('/', (req, res) =>{
    res.send('Hello world!');
})
app.get('/test', (req, res) =>{
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
   res.json(goats);
})

console.log("...Server is running");
app.listen(3200);