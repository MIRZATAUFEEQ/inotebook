import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = (props) => {
  const [credential, setcredential] = useState({ name: "", email: "", password: "" })

  const navigate = useNavigate()
  // given request for Signup
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credential;
    const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name,email,password }),
    });
    const json = await response.json()
    // console.log(json)
 if(json.success){
      // save the auth token and redirect
      localStorage.setItem('token', json.authtoken)
      navigate('/')
      props.showalert("account created","successfull")
 }
 else{
  props.showalert("invalid credintial","danger")
 }
  }
  //handle change for writing in react
  const handleChange = (e) => {
    setcredential({ ...credential, [e.target.name]: e.target.value })
  }
  return (
    <div className='container'><form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label  htmlFor="name"  className="form-label">Name</label>
        <input name='name' type="text" onChange={handleChange} className="form-control" id="name" aria-describedby="emailHelp" placeholder='enter your name' />
      </div>
      <div className="mb-3">
        <label  htmlFor="email "  className="form-label">Email address</label>
        <input name='email' type="email" onChange={handleChange} className="form-control" id="email" aria-describedby="emailHelp" placeholder='enter your email' />
      </div>
      <div className="mb-3">
        <label  htmlFor="password"  className="form-label">Password</label>
        <input name='password' type="password" onChange={handleChange} className="form-control" id="password"/>
      </div>


      <button type="submit" className="btn btn-primary">Submit</button>
    </form></div>
  )
}

export default Signup