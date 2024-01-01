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
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODE4Y2ZlODdjYjA5ZGNmYzZlNmQyMyIsImlhdCI6MTcwMjk5MTQ1NH0.5KAHA8xQYjEtOvGHP4eR_67yZKmv2IlitHM1xCQBYWE",
            },
        });
        const json = await response.json()
        console.log(json)
        setnotes(json);
    }



    // add Note 💓💓💓💓
    const addnote = async (title, description, tag) => {
        // TODO: api call 
        // API Call 
        const response = await fetch(`${host}/api/notes/addnotes`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.

            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODE4Y2ZlODdjYjA5ZGNmYzZlNmQyMyIsImlhdCI6MTcwMjk5MTQ1NH0.5KAHA8xQYjEtOvGHP4eR_67yZKmv2IlitHM1xCQBYWE",
            },
            body: JSON.stringify({ title, description, tag }),
        });



        console.log("adding a new note")
        const note = {
            "_id": "6583dcb05fc9842bd3a6e8eb1",
            "user": "65818cfe87cb09dcfc6e6d23",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-12-21T06:35:28.446Z",
            "__v": 0
        }

        setnotes(notes.concat(note))
    }


    // delete Note😡😡😡😡😡🤬🤬
    const deletenote =async (id) => {
          // API Call 
          const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
            method: "DELETE", // *GET, POST, PUT, DELETE, etc.

            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODE4Y2ZlODdjYjA5ZGNmYzZlNmQyMyIsImlhdCI6MTcwMjk5MTQ1NH0.5KAHA8xQYjEtOvGHP4eR_67yZKmv2IlitHM1xCQBYWE",
            },
        });
        const json = response.json();
        console.log(json)



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
            method: "POST", // *GET, POST, PUT, DELETE, etc.

            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODE4Y2ZlODdjYjA5ZGNmYzZlNmQyMyIsImlhdCI6MTcwMjk5MTQ1NH0.5KAHA8xQYjEtOvGHP4eR_67yZKmv2IlitHM1xCQBYWE",
            },
            body: JSON.stringify({ title, description, tag }),
        });
        const json = response.json();
        console.log(json)



        // logig to edite in client 
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {


                element.title = title;
                element.description = description;
                element.tag = tag;
            }

        }
    }




    return (
        <NoteContext.Provider value={{ notes, addnote, deletenote, editenote, getAllnote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default Notestate














































































// const detail = {
//     "name": "sahil",
//     "class": "bca 5th"
// }
// const [updatedetail, setupdatedetail] = useState(detail)
// const update = () => {
//     setTimeout(() => {
//         setupdatedetail({
//             "name": "aman",
//             "class": "7"
//         })
//     }, 1000);
// }