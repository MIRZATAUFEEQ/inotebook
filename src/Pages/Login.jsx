import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Login = (props) => {
  const [credential, setcredential] = useState({ email: "", password: "" })
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: credential.email, password: credential.password }),
    });
    const json = await response.json()
    // console.log(json)
    if (json.success) {
      // save the auth token and redirect
      localStorage.setItem('token', json.authtoken)
      navigate('/')
      props.showalert("Loggedin","successfull")
    }
    else {
      props.showalert("invalid credintial","danger")
    }
  }

  const handlechange = (e) => {
    setcredential({ ...credential, [e.target.name]: e.target.value })
  }
  return (
    <div><form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" onChange={handlechange} value={credential.email} className="form-control" name='email' id="email" aria-describedby="emailHelp" />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" onChange={handlechange} value={credential.password} name='password' className="form-control" id="password" />
      </div>
      <button type="submit" className="btn btn-primary" >Submit</button>
    </form></div>
  )
}

export default Login