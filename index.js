const express = require("express");

const app = express();
app.use(express.json());

//We will use prisma client to connect to the database
const artistsRouter = require('./routes/artists');
const songsRouter = require('./routes/songs');
const rankingsRouter = require('./routes/rankings');
const goatsRouter = require('./routes/goats');
const votingsRouter = require('./routes/votings');

app.use('/artists',artistsRouter);
app.use('/songs', songsRouter);
app.use('/goats', goatsRouter);
app.use('/rankings',rankingsRouter);
app.use('/votings', votingsRouter);


//change



console.log("...Server is running");
app.listen(3000);