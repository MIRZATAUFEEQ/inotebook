import React, { useContext, useState } from 'react'
import NoteContext from '../Context/Note/NoteContext';

const AddNote = () => {
    const context = useContext(NoteContext)
    const { addnote } = context;
    const [note, setnote] = useState({ title: "", description: "", tag: "default" })
    // handleAddnote
    const handleAddnote = (e) => {
        e.preventDefault();
        addnote(note.title,note.description,note.tag)
    }
    const handlechange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <div className='container my-3'>
                <h1>add a note</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input minLength={5} required type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" onChange={handlechange} />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input minLength={5} required type="text" className="form-control" id="description" name='description' onChange={handlechange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input type="text" className="form-control" id="tag" name='tag' onChange={handlechange} />
                    </div>
                 
                    <button disabled={note.title.length<5|| note.description.length<5} type="submit" className="btn btn-primary" onClick={handleAddnote}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddNote