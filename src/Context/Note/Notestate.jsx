import React, { useState } from 'react'
import NoteContext from './NoteContext'

const Notestate = (props) => {
    const host = "http://localhost:5000"
    const notesInitial = []
    const [notes, setnotes] = useState(notesInitial)




    // get all Note 💓💓💓💓
    const getAllnote = async () => {
        // TODO: api call 
        // API Call 
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.

            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token"),
            },
        });
        const json = await response.json()
        // console.log(json)
        setnotes(json);
    }



    // add Note 💓💓💓💓
    const addnote = async (title, description, tag) => {
        // TODO: api call 
        // API Call 
        // eslint-disable-next-line 
        const response = await fetch(`${host}/api/notes/addnotes`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token"),
            },
            body: JSON.stringify({ title, description, tag }),
        });
        const note = await response.json()

        setnotes(notes.concat(note))

        // console.log("adding a new note")

    }


    // delete Note😡😡😡😡😡🤬🤬
    const deletenote = async (id) => {
        // API Call 
        const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
            method: "DELETE", // *GET, POST, PUT, DELETE, etc.

            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token"),
            },
        });
        const json = response.json();
        // console.log(json)



        console.log("deleteing a note" + id)
        const newnote = notes.filter((note) => {
            return note._id !== id
        })
        setnotes(newnote);
    }



    //edite Note  ✂️✂️✂️✂️✂️
    const editenote = async (id, title, description, tag) => {

        // API Call 
        const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
            method: "PUT", // *GET, POST, PUT, DELETE, etc.

            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token"),
            },
            body: JSON.stringify({ title, description, tag }),
        });
        const json = response.json();
        // console.log(json)



        // logic to edite in client 
        let NewNote = JSON.parse(JSON.stringify(notes))
        for (let index = 0; index < NewNote.length; index++) {
            const element = NewNote[index];
            if (element._id === id) {
                NewNote[index].title = title;
                NewNote[index].description = description;
                NewNote[index].tag = tag;
                break;
            }
        }
        setnotes(NewNote)
    }




    return (
        <NoteContext.Provider value={{ notes, addnote, deletenote, editenote, getAllnote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default Notestate
