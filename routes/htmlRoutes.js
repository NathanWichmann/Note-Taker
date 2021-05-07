const router = require('express').Router();
const fs = require("fs");
const noteList = JSON.parse(fs.readFileSync("db/db.json"));
const path = require('path');

router.get("/", (req, res) => res.sendFile(path.join(__dirname, "../public/index.html")));

router.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '../public/notes.html')));





module.exports = router; 