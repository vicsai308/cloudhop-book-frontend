import React from 'react'
import { useState } from 'react';

const Login = () => {
  const [credentials, setCredentials] = useState({email:"", password:""})
  
  const handleSubmit = async(e) =>{
    e.preventDefault();
    //Login
    //API Call
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email:credentials.email, password:credentials.password})
    });
    const json = await response.json(); // parses JSON response into native JavaScript objects
    console.log(json);
  }

  const onchange = (e) =>{
    setCredentials({...credentials,[e.target.name]: e.target.value})
   }

  return (
    <div>
      {/* we must give onsubmit on form tag, if given in button inside form tag, page will reload. */}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" aria-describedby="emailHelp" value={credentials.email} name="email" onChange={onchange}/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" value={credentials.password} name="password" onChange={onchange}/>
        </div>
        {/* <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div> */}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Login
