//this connects the routes to the server 
const router = require('express').Router();
// used to asynchronously write the specified data to a file.
const fs = require("fs");
//creates the notelist and connects it the json and reads the json string int he db.json string file 
const noteList = JSON.parse(fs.readFileSync("db/db.json"));
//this is the get notes req and res
router.get('/notes', (req, res) => {
    const noteList = JSON.parse(fs.readFileSync("db/db.json"));
    return res.json(noteList);
});

//this creates the new note and writes it the bd.json file 
router.post('/notes', (req, res) => {
  
    const newNote = {
        id: noteList[noteList.length - 1].id + 1,
        title: req.body.title,
        text: req.body.text,

    };
    
    console.log(newNote);

    noteList.push(newNote);
    fs.writeFileSync("db/db.json", JSON.stringify(noteList));

    return res.json(noteList);
});
// this is the delete request 
router.delete('/notes/:id', (req, res) => {
    console.log(req.params)
    const noteId = parseInt(req.params.id)
    const noteList = JSON.parse(fs.readFileSync("db/db.json"));
    const newArray = noteList.filter(note => note.id !== noteId);

    fs.writeFileSync("db/db.json", JSON.stringify(newArray));

     res.json({ok: true});
});
//exports the  crud actions to the server 
module.exports = router;