import React, { useState } from 'react'
import NoteContext from './NoteContext'

const Notestate = (props) => {
    const notesInitial = [
        {
            "_id": "6582f4a047372ea53f585c31",
            "user": "65818cfe87cb09dcfc6e6d23",
            "title": "this is my first note and we are exited for use it",
            "description": "this note is about math and bio",
            "tag": "math,bio",
            "date": "2023-12-20T14:05:20.411Z",
            "__v": 0
        },
        {
            "_id": "6583dcb0fc9842bd3a6e8eb1",
            "user": "65818cfe87cb09dcfc6e6d23",
            "title": "this is my first note",
            "description": "this note is about math",
            "tag": "math",
            "date": "2023-12-21T06:35:28.446Z",
            "__v": 0
        },
        {
            "_id": "6583dcb0fc9842bd3a6e8eb1",
            "user": "65818cfe87cb09dcfc6e6d23",
            "title": "this is my first note",
            "description": "this note is about math",
            "tag": "math",
            "date": "2023-12-21T06:35:28.446Z",
            "__v": 0
        },
        {
            "_id": "6583dcb0fc9842bd3a6e8eb1",
            "user": "65818cfe87cb09dcfc6e6d23",
            "title": "this is my first note",
            "description": "this note is about math",
            "tag": "math",
            "date": "2023-12-21T06:35:28.446Z",
            "__v": 0
        },
        {
            "_id": "6583dcb0fc9842bd3a6e8eb1",
            "user": "65818cfe87cb09dcfc6e6d23",
            "title": "this is my first note",
            "description": "this note is about math",
            "tag": "math",
            "date": "2023-12-21T06:35:28.446Z",
            "__v": 0
        }
    ]
    const [notes, setnotes] = useState(notesInitial)
    return (
        <NoteContext.Provider value={{ notes, setnotes }}>
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