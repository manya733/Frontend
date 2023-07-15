import { useFormik } from 'formik';
import React from 'react'

const Login = () => {


  const loginForm=useFormik({
    initalValues:{
      email:'',
      password:''
    },
  })
  return (
    <div className='col-md-3 mx-auto d-flex align-items-center vh-100'>
    <div className="card w-100 shadow-lg">
    <div className="card-body p-5">
      <h4 className="my-5">
        Login Here
      </h4>
      <form onSubmit={loginForm}>
       < label htmlFor="">Email</label>
       <span style={{marginLeft:'10px',fontSize:10, color:'red'}}></span>
       <input type="email"className='form-control mb-4' name="email" />
       < label htmlFor="">Password</label>
       <span style={{marginLeft:'10px',fontSize:10, color:'red'}}></span>
       <input type="email"className='form-control mb-4' name="password" />
       <button  type='submit' className="my-5 btn btn-primary w-100">Submit</button>
      </form>
            </div>
          </div>
        </div> 
  )
}

export default Login;