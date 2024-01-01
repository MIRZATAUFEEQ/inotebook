import React, { useContext, useEffect } from 'react'
import NoteContext from '../Context/Note/NoteContext'
const About = () => {
  const a = useContext(NoteContext)

  // useEffect(() => {
  //   a.update()
  //   //eslint-disable-next-line
  // }, [])
  return (
    <div>this is  and i am in class </div>
  )
}
// {a.updatedetail.name}
// {a.updatedetail.class}
export default About