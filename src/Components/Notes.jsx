import React, { useContext, useEffect, useRef, useState } from 'react'
import NoteContext from '../Context/Note/NoteContext';
import Noteitem from './Noteitem';
import AddNote from './AddNote';
const Notes = () => {
    const context = useContext(NoteContext)
    const { notes, addnote, getAllnote } = context;

    // getAllnote😃😃😃😃😐😐😐👩‍🦰👩‍🦰🥰🥰
    useEffect(() => {
        getAllnote()
    }, [])

    // handleAddnote
    const [note, setnote] = useState({ title: "", description: "", tag: "default" })

    const handleAddnote = (e) => {
        e.preventDefault();
        // addnote(note.title,note.description,note.tag)
    }
    const handlechange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value })
    }

    // updateNotes🥰🥰🥰👩‍🦰😐😃✂️💓🤬😡🪨
    const ref = useRef(null)
    const updateNote = (notes) => {

        ref.current.click()
        console.log(ref)
    }

    return (
        <>
            <AddNote />
            {/* Button trigger modal 😃🤣😂🥰😎😄😀  */}
            <button ref={ref} type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Launch demo modal
            </button>

            {/* Modal 😃🤣😂🥰😎😄😀  */}
            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edite Note</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <form>
                    <div className="mb-3">
                        <label htmlFor="etitle" className="form-label">Title</label>
                        <input type="text" className="form-control" id="etitle" name='etitle' aria-describedby="emailHelp" onChange={handlechange} />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="edescription" className="form-label">Description</label>
                        <input type="text" className="form-control" id="edescription" name='edescription' onChange={handlechange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="etag" className="form-label">Tag</label>
                        <input type="text" className="form-control" id="etag" name='etag' onChange={handlechange} />
                    </div>
                 
                </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Update Note</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* 😎🤣😂😄💓😀😃🥲 */}
            <div className="row my-3">
                <h2>your notes</h2>
                {
                    notes.map((note) => {
                        return <Noteitem key={note._id} updateNote={updateNote} note={note} />;
                    })
                }
            </div>
        </>
    )
}

export default Notes