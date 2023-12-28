import React, { useContext } from 'react'
import NoteContext from '../Context/Note/NoteContext';
import Noteitem from './Noteitem';
const Notes = () => {
    const context = useContext(NoteContext)
    const { notes, setnotes } = context;
    return (
        <div>
            <div className="row my-3">
                <h2>your notes</h2>
                {
                    notes.map((note) => {
                        return <Noteitem note={note} />;
                    })
                }
            </div>
        </div>
    )
}

export default Notes