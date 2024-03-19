import React from 'react'
import './Login.css';
const Login = () => {
  return (
    <>

    <form className="form" style={{border:'1px solid black',padding:20}}>
    <div class="mb-3" style={{width:250}}>
      <label for="exampleInputEmail1" className="form-label" >Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      
    </div>
    <div class="mb-3 " style={{width:250}}>
      <label for="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1"/>
    </div>
    <div className="mb-3 form-check ">
      <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
      <label className="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>

  
  </>
  )
}

export default Login