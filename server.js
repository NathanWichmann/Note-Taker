const express = require('express');
const path = require('path');

const moment = require('moment')
const uuid = require('uuid')
const fs = require('fs');



const app = express();
const PORT = process.env.PORT || 3000;



app.use(express.static('public'));
//handle url encoded data
app.use(express.urlencoded({ extended: true }));
//body parser middleware 
app.use(express.json());

// app.use('/api', apiRoutes)
// app.use('/', htmlRoutes)




const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    next();
}
// app.use(logger);



app.get('/api/notes', (req, res) => {
    fs.readFile('db/db.json', 'utf8', (err, data) => {
        if (err) {
            return console.log(err);
        }
        console.log(data);
        return data;
    });
});

      



app.post('/api/notes', (req, res) => {
    const noteList = JSON.parse(fs.readFileSync("db/db.json", "utf8"));
    const newNote = {
        id: uuid.v4(),
        title: req.body.noteTitle,
        text: req.body.noteText,
        status: 'active'
    };
    console.log(newNote);

    noteList.push(newNote);
    fs.writeFileSync("db/db.json", "utf8");

    return noteList;
});

// app.get('/api/notes/:id', (req, res) => {
//     const found = noteList.some(noteList => noteList.id === parseInt(req.params.id ));
//     if (found) {
//       res.json(notes.filter(noteList => noteList.id === parseInt(req.params.id )));
//  } else {
//      res.status(400).json({ msg: `No note with the id of ${req.params.id}`})
//  }
//  });

//  fs.readFile('db.json', function (err, buf){
//     console.log(buf.toString());
// });



app.listen(PORT, () => console.log(`server started on ${PORT}`));
