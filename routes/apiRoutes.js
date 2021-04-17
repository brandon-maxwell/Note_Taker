const express = require('express');
const fs = require('fs');

module.exports = function (app) {
    fs.readFile("db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        var notesData = JSON.parse(data);
        console.log(notesData);

        app.get('/api/notes', function (req, res) {
            res.json(notesData);
        });

        app.post('/api/notes/:id', function(req, res) {
            let newNote = req.body;
            notesData.push(newNote);
            fs.writeFile('db/db.json', JSON.stringify(notesData), err => {
                if (err) throw err;
                return true;
            });
        });

        app.get('/api/notes/:id', function (req, res) {
            res.json(notesData[req.params.id]);
        });
    });
}