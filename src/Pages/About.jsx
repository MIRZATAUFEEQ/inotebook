import React, { useContext, useEffect } from 'react'
import NoteContext from '../Context/Note/NoteContext'
const About = () => {
  const a = useContext(NoteContext)

  useEffect(() => {
    a.update()
    //eslint-disable-next-line
  }, [])
  return (
    <div>this is {a.updatedetail.name} and i am in class {a.updatedetail.class}</div>
  )
}

export default About