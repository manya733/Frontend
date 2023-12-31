import { useFormik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import * as Yup from 'yup';


const signupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Password is Required')
});

const Signup = () => {

  const navigate = useNavigate();

  const signupForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      console.log(values);

      // sending a request on backend to save user data
      const res = await fetch('http://localhost:5000/user/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      });

      console.log(res.status);

      if (res.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'User Registered Successfully',
          text: 'Please Login to Continue'
        });
        navigate('/login');
      }

      // add code here to connect to backend
    },
    validationSchema: signupSchema
  });
  return (
    <div>

      <div className="col-md-3 mx-auto">
        <div className="card">
          <div className="card-body">
            <h2 className="my-5 text-center">Signup Form</h2>

            <form onSubmit={signupForm.handleSubmit}>
              <label htmlFor="">Name</label>
              <span style={{ color: 'red', fontSize: 15, marginLeft: 10 }}>{signupForm.touched.name && signupForm.errors.name}</span>
              <input className="form-control mb-3" onChange={signupForm.handleChange} value={signupForm.values.name} name="name" />

              <label htmlFor="">Email</label>
              <span style={{ color: 'red', fontSize: 15, marginLeft: 10 }}></span>
              <input className="form-control mb-3" onChange={signupForm.handleChange} value={signupForm.values.email} name="email" />

              <label htmlFor="">Password</label>
              <span style={{ color: 'red', fontSize: 15, marginLeft: 10 }}>{signupForm.touched.password && signupForm.errors.password}</span>
              <input className="form-control mb-3" type="password" onChange={signupForm.handleChange} value={signupForm.values.password} name="password" />

              <button type="submit" className="btn btn-primary mt-4">Signup</button>
            </form>

          </div>
        </div>
      </div>
    </div>

  )
}

export default Signup;