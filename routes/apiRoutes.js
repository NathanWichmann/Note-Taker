const router = require('express').Router();
const fs = require("fs");
const noteList = JSON.parse(fs.readFileSync("db/db.json"));

router.get('/api/notes', (req, res) => {
    return res.json(noteList);
});


router.post('/api/notes', (req, res) => {
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

// router.delete('/api/notes/:id', (req, res) => {
//     const noteId = (req.params.id).toString();
//     const noteList = json.parse(fs.readFileSync("db/db.json"));
    
//     console.log();

//     noteList.push();
//     fs.writeFileSync("db/db.json", JSON.stringify(noteList));

//     return res.json(noteList);
// });

module.exports = router;