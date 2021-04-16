// Dependencies

const express = require('express');
const path = require('path');

// Sets up the Express App

const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));