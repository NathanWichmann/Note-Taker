
//brings in the express dependency 
const express = require('express');
//brings in the path dependency
const path = require('path');
//brings in the file sharing to read and write 
const fs = require('fs');
//brings in the notelist from index.js to read the file in the db.json
const noteList = JSON.parse(fs.readFileSync("db/db.json"));
//allows the files to be put in seperate folders 
// const router = require('express').Router();

//creates the app variable for express 
const app = express();
//creates the port variable for 3000 
const PORT = process.env.PORT || 3000;
//connects all the public files 
app.use(express.static('public'));
//handle url encoded data
app.use(express.urlencoded({ extended: true }));
//body parser middleware 
app.use(express.json());
const htmlRoutes = require("./routes/htmlRoutes")
const apiRoutes = require("./routes/apiRoutes")

//connects to the notes response to the html
app.use("/", htmlRoutes);
app.use("/api", apiRoutes);



app.listen(PORT, () => console.log(`server started on ${PORT}`));
