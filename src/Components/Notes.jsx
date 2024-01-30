import React, { useContext, useEffect, useState } from 'react'
import NoteContext from '../Context/Note/NoteContext';
import Noteitem from './Noteitem';
import AddNote from './AddNote';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
const Notes = () => {
    const context = useContext(NoteContext)
    const { notes, addnote, getAllnote, editenote } = context;

    // getAllnote😃😃😃😃😐😐😐👩‍🦰👩‍🦰🥰🥰
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem("token")) {
            getAllnote()
        }
        else {
            navigate('/login')
        }
    }, [])

    // handleAddnote
    const [note, setnote] = useState({ id: "", etitle: "", edescription: "", etag: "default" })

    const handleUpdatenote = (e) => {
        e.preventDefault();
        editenote(note.id, note.etitle, note.edescription, note.etag)
        // addnote(note.etitle, note.edescription, note.etag)
        setModalIsOpen(false)
    }
    const handlechange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value })
    }


    // updateNotes🥰🥰🥰👩‍🦰😐😃✂️💓🤬😡🪨
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = (currentNote) => {
        setnote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
        setModalIsOpen(true)
    }
    const closeModal = () => {
        setModalIsOpen(false)
    }

    return (
        <>
            <AddNote />

            {/* Modal 😃🤣😂🥰😎😄😀  */}
            <div className='container'>
                <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                    <form className='my-3 container'>
                        <div className="mb-3">
                            <label htmlFor="etitle" className="form-label">Title</label>
                            <input minLength={5} required type="text" value={note.etitle} className="form-control" id="etitle" name='etitle' aria-describedby="emailHelp" onChange={handlechange} />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="edescription" className="form-label">Description</label>
                            <input minLength={5} required value={note.edescription} type="text" className="form-control" id="edescription" name='edescription' onChange={handlechange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="etag" className="form-label">Tag</label>
                            <input value={note.etag} type="text" className="form-control" id="etag" name='etag' onChange={handlechange} />
                        </div>

                        <button disabled={note.etitle.length < 5 || note.edescription.length < 5} type="submit" className="btn btn-primary" onClick={handleUpdatenote}>Submit</button>
                    </form>
                    <button onClick={closeModal}>Close Modal</button>
                </Modal>
            </div>
            {/* 😎🤣😂😄💓😀😃🥲 */}
            <div className="row my-3">
                <h2>Your notes</h2>
                <div className="container">
                    {notes.length === 0 && 'no notes available'}</div>
                {Array.isArray(notes) ? (
                    notes.map((note) => (
                        <Noteitem key={note._id} openModal={openModal} note={note} />
                    ))
                ) : (
                    <p>No notes available.</p>
                )}
            </div>

        </>
    )
}

export default Notes