
//brings in the express dependency 
const express = require('express');
//brings in the path dependency
const path = require('path');
//brings in the file sharing to read and write 
const fs = require('fs');


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

//brings the html routes and api routes to the server to use 
app.use("/", htmlRoutes);
app.use("/api", apiRoutes);


//connects the server on the above port
app.listen(PORT, () => console.log(`server started on ${PORT}`));
