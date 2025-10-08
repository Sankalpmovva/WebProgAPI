const express = require("express");

const app = express();

const artistsRouter = require('./routes/artists');
const goatsRouter = require('./routes/goats');

app.use('/artists',artistsRouter);
app.use('/goats', goatsRouter);


console.log("...Server is running");
app.listen(3200);