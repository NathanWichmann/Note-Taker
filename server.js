const express = require('express');
const path = require('path');
// const { title } = require('process');
const moment = require('moment')
const uuid = require('uuid')
const fs = require('fs');


const app = process.env.PORT || express();
const   PORT = 3000;

fs.readFile('db.json', function (err, buf){
    console.log(buf.toString());
});
app.use(express.urlencoded({ extended: false }));
app.use(express.json());





app.get('/api/notes/:id', (req, res) => {
   const found = notes.some(notes => notes.id === parseInt(req.params.id ));
   if (found) {
     res.json(notes.filter(notes => notes.id === parseInt(req.params.id )));
} else {
    res.status(400).json({ msg: `No note with the id of ${req.params.id}`})
}
});



const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    next();
}
// app.use(logger);

const notes = [
    {   id: 1,
        noteTitle: 'tuesday before 7',
        noteText: 'need to take out the trash'
    },
    {   id: 2,
        noteTitle: 'wednesday at 3',
        noteText: 'whange winter tires at myers'
    },
    {   id: 3,
        noteTitle: 'thursday at 1',
        noteText: 'physio with devan'
    }
]



app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'notes.html')));

app.get('/api/notes', (req, res) => res.json(notes));

app.post('/api/notes', (req, res) => {
    const newNote = {
        id: uuid.v4(),
        title: req.body.noteTitle,
        text: req.body.noteText,
        status: 'active'
    }

    console.log(newNote);

    notes.push(newNote);

    res.json(notes);
});



app.listen(PORT, () => console.log(`server started on ${PORT}`));
