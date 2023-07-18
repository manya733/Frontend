import MDEditor from "@uiw/react-md-editor";
import { useFormik } from "formik";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";



const AddBlog = () => {

  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')))
  const [value, setValue] = React.useState("Write Blog Here");

  const [selFile, setSelFile] = useState('');

  const AddForm = useFormik({
    initialValues: {
      user: currentUser._id,
      title: '',
      description: '',
      data: '',
      cover: '',
    },

    onSubmit: async (values) => {
      values.data = value;
      values.cover = selFile;
      console.log(values);

      // sending a request on backend to save user data
      const res = await fetch('http://localhost:5000/blog/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      });
      console.log(res.status);
    

      if (res.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Addblog Successfully!!...',
          text: 'Please Login to Continue'
        });
      }

      // add code here to connect to backend
    },

  });

  const uploadFile = (e) => {
    const file = e.target.files[0];
    setSelFile(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
      }
    });
  };

  return (
    <div>
      <div className="col-md-8 mx-auto">
        <div className="card">
          <div className="card-body">
            <h2 className="my-5 text-center">Add Blog</h2>

            <form onSubmit={AddForm.handleSubmit}>
              <label htmlFor="">Title</label>
              <span style={{ color: 'red', fontSize: 15, marginLeft: 10 }}>{AddForm.touched.title && AddForm.errors.title}</span>
              <input className="form-control mb-3" onChange={AddForm.handleChange} value={AddForm.values.title} name="title" />

              <label htmlFor="">Deescription</label>
              <span style={{ color: 'red', fontSize: 15, marginLeft: 10 }}>{AddForm.touched.description && AddForm.errors.description}</span>
              <input className="form-control mb-3" onChange={AddForm.handleChange} value={AddForm.values.description} name="description" />


              <input type="file" onChange={uploadFile} />

              <MDEditor className="mt-4"
                value={value}
                onChange={setValue}
              />

              <button type="submit" className="btn btn-primary mt-4">Add</button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;