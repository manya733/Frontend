import { useFormik } from 'formik'
import React from 'react'

const AddBlog = () => {
  const blogForm = useFormik({
    initalValues: {
      title: '',
      Description: ''

      

    },
    onSubmit:async(values)=>{
      console.log(values);
    }
  })


  return (
    <div>
      <h2 className="my-5 text-center">Add Blogs</h2>


      <form className="col-md-5 mx-auto">
        <div className="card">
          <div className="card-body">

            < label htmlFor="">Title</label>
            <input type="  title" className='form-control mb-4' name="title" />
            < label htmlFor="">Description</label>
            <input type="description" className='form-control mb-4' name="description" />
            <button type='add blog' className="my-5 btn btn-primary w-100">Add Blog</button>
          </div>
        </div>
      </form>
    </div>



  )
};

export default AddB