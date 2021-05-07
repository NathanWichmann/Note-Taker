//this connects the files to the server.js through the router option in the express.js utilities
const router = require('express').Router();
const fs = require("fs");
const noteList = JSON.parse(fs.readFileSync("db/db.json"));
//this is needed to create the path in order for the files to join no path no joinning
const path = require('path');
//this gets and creates the path.join through the router to the index.html
router.get("/", (req, res) => res.sendFile(path.join(__dirname, "../public/index.html")));
//this gets and creates the path.join through the router to the notes.html
router.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '../public/notes.html')));





module.exports = router; 