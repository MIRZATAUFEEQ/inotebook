import React from 'react'
import Notes from '../Components/Notes';
const Home = (props) => {
  const { showalert } = props;
  return (
    <>
      <Notes showalert={showalert} />
    </>
  )
}

export default Home