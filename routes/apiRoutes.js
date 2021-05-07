const router = require('express').Router();
const fs = require("fs");
const noteList = JSON.parse(fs.readFileSync("db/db.json"));

router.get('/notes', (req, res) => {
    const noteList = JSON.parse(fs.readFileSync("db/db.json"));
    return res.json(noteList);
});


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

router.delete('/notes/:id', (req, res) => {
    console.log(req.params)
    const noteId = parseInt(req.params.id)
    const noteList = JSON.parse(fs.readFileSync("db/db.json"));
    const newArray = noteList.filter(note => note.id !== noteId);

    fs.writeFileSync("db/db.json", JSON.stringify(newArray));

     res.json({ok: true});
});

module.exports = router;