const express = require('express');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const notesData = require('../db/db.json');
var path = require('path');

module.exports = (app) => {
        app.get('/api/notes', (req, res) => res.json(notesData));

        app.post('/api/notes', (req, res) => {
            var newNote = req.body;
            newNote.id = uuidv4();
            console.log(newNote)

            notesData.push(newNote);
            console.log(path.resolve(__dirname,'../db/db.json'));
            fs.writeFile( path.resolve(__dirname,'../db/db.json'), JSON.stringify(newNote), err => {
                err ? console.log(err) : console.log('Note Added');
                res.json("../db/db.json");
            });
        });
    };