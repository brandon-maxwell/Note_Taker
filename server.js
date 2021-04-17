const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// parse application/json
app.use(bodyParser.json())

require('./routes/apiRoutes.js')(app);
require('./routes/htmlRoutes.js')(app);

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));

/*

// DATA goes here:
const notes = [];

// Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'notes.html')));

app.get('/api/notes', (req, res) => res.json(notes));

app.get('/api/notes/:notes', (req, res) => {
    const chosen = req.params.notes;
    console.log(chosen);
    for (let i = 0; i < notes.length; i++) {
        if (chosen === notes[i].routeName) {
            return res.json(notes[i]);
        }
    }
    return res.json(false);
});

app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    newNote.routeName = newNote.title.replace(/\s+/g, '').toLowerCase();
    console.log(newNote);

    notes.push(newNote);
    res.json(newNote);
});
*/