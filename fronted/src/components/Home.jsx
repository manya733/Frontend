import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {

  const [blogList, setBlogList] = useState([]);

  const fetchBlogs = async () => {
    const res = await fetch('http://localhost:5000/blog/getall');
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    setBlogList(data);
  }

  const displayBlogs = () => {
    return blogList.map(blog => (
      <div className='card mb-5'>
        <img src={'http://localhost:5000/'+blog.cover} className='card-img-top' />
        <div className='card-body'>
          <h3>{blog.title}</h3>
          <Link className="btn btn-primary mt-4" to={'/viewblog/'+blog._id}>View more</Link>
        </div>
      </div>
    ))
  }

  useEffect(() => {
    fetchBlogs();
  }, [])



  return (
    
    <div>
     
      <header className='text-center'></header>
      <h2 className='my-text' style={{ color: 'blue', fontsize: '2rem' }}>Inc .This Morning</h2>
      <h1 className='my-text' style={{ color: 'darkblue', fontsize: '3rem' }}>
        <span>"<span>Blog</span>"</span>
      </h1>
      <p className='my-text' style={{ color: 'grey', fontWeight: '500' }}>
        awesome place to make oneself <br /> productive and entertained through
        daily updates.
      </p>

      <div className='container'>
        <div className='input-group mx-auto w-50'>
          <input className='form-control' />
          <button type="button " class="btn btn-outline-primary ">Search</button>
        </div>
        <div className='row'>

          <div className='col-md-3'></div>
          <div className='col-md-9'>
            {displayBlogs()}
          </div>
        </div>
      </div>

    </div>


  )
}

export default Home;