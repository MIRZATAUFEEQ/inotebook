import React, { useContext } from 'react'
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import NoteContext from '../Context/Note/NoteContext';

const Noteitem = (props) => {
    const context = useContext(NoteContext)
    const { deletenote } = context;
    const { note } = props;
    return (
        <div className='col-md-3'>
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
               <FaTrashAlt className='mx-2' id='mouse' onClick={()=>{deletenote(note._id)}}/>
               <FaEdit className='mx-2' id='mouse'/>
                </div>
            </div>
        </div>
    )
}

export default Noteitem