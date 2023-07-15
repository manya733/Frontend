import { useFormik } from 'formik';
import React from 'react'

const Signup = () => {

  const signupForm=useFormik({
    initalValues:{
      name:"",
      email:"",
      password:"",
    }
  });
  return (
    <div>
        
      <div className="col-md-3 mx-auto">
        <div className="card">
          <div className="card-body">
            <h2 className="my-5 text-center">Signup Form</h2>

            <form onSubmit={signupForm}>
              <label htmlFor="">Name</label>
              <span style={{color: 'red', fontSize: 15, marginLeft: 10}}></span>
              <input className="form-control mb-3" />
              
              <label htmlFor="">Email</label>
              <span style={{color: 'red', fontSize: 15, marginLeft: 10}}></span>
              <input className="form-control mb-3" />

              <label htmlFor="">Password</label>
              <span style={{color: 'red', fontSize: 15, marginLeft: 10}}></span>
              <input className="form-control mb-3" type="password"  />

              <button type="submit" className="btn btn-primary mt-4">Login</button>
            </form>

          </div>
        </div>  
      </div>
    </div>
    
  )
}

export default Signup;