const express = require('express')
const router = express.Router();
const Notes = require('../models/Notes');
const fetchuser = require('../middleware/fetchuser')
const { body, validationResult } = require('express-validator');

//ROUTE 1:  getting all notes using GET "/api/notes/fetchallnotes"
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {

        const notes = await Notes.find({ user: req.user.id })
        res.send(notes)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured")
    }
})

//ROUTE 2:  add new notes using POST "/api/notes/addnotes"
router.post('/addnotes', fetchuser, [
    body('title', 'enter a valid title').isLength({ min: 3 }),
    body('description', 'description must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    try {
        const { title, description, tag, } = req.body;

        // if there are errors return bad request and the errors 
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ error: error.array() });
        }


        const note = new Notes({
            title, description, tag, user: req.user.id
        })
        const savednote = await note.save()
        res.json(savednote);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured")
    }
})

//ROUTE 3:  update existing notes using put "/api/notes/updatenotes/:id"
router.put('/updatenotes/:id', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;
    try {


        // create a new note object
        const newNote = {};
        if (title) {
            newNote.title = title;
        }
        if (description) {
            newNote.description = description;
        }
        if (tag) {
            newNote.tag = tag;
        }

        // find the note to be updated and update it 
        let note = await Notes.findById(req.params.id);
        if (!note) {
            res.status(404).send('Not Found');
        }
        if (note.user.toString() !== req.user.id) {
            return res.status(404).send('Not Allowed');
        }
        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json(note);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured")
    }
})

//ROUTE 4:  delete existing notes using delete "/api/notes/deletenotes"
router.delete('/deletenotes/:id', fetchuser, async (req, res) => {
    try {
        // find the note to be deleted and delete it 
        let note = await Notes.findById(req.params.id);
        if (!note) {
            res.status(404).send('Not Found');
        }
        // allow deletion only if user owns this notes
        if (note.user.toString() !== req.user.id) {
            return res.status(404).send('Not Allowed');
        }
        note = await Notes.findByIdAndDelete(req.params.id)
        res.json({ "success": "note has been deleted", note: note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured")
    }
})

module.exports = router