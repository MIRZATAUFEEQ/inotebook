import React, { useContext, useEffect } from 'react'
import NoteContext from '../Context/Note/NoteContext';
import Noteitem from './Noteitem';
import AddNote from './AddNote';
const Notes = () => {
    const context = useContext(NoteContext)
    const { notes, addnote, getAllnote } = context;
    useEffect(() => {
        getAllnote()
    }, [])

    return (
        <div>
            <AddNote />
            <div className="row my-3">
                <h2>your notes</h2>
                {
                    notes.map((note) => {
                        return <Noteitem key={note._id} note={note} />;
                    })
                }
            </div>
        </div>
    )
}

export default Notes