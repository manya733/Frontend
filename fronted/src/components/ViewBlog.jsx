import MDEditor from '@uiw/react-md-editor';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ViewBlog = () => {

    const {id} = useParams();

    const [blogDetails, setblogDetails] = useState(null);
    
    const fetchBlogById = async () => {
        const res = await fetch('http://localhost:5000/blog/getbyid/'+id);
        console.log(res.status);
        const data = await res.json();
        setblogDetails(data);
    }

    useEffect(() => {
      fetchBlogById();
    }, []);

    const displayBlog = () => {
        if(blogDetails!==null){
            return <div>
                <h1 className='mb-3'>{blogDetails.title}</h1>

                <MDEditor.Markdown source={blogDetails.data} style={{ whiteSpace: 'pre-wrap' }} />
            </div>
        }else{
            <h1>LOading ...</h1>
        }
    }
    

  return (
    <div>
        <div className='container'>
            {displayBlog()}
        </div>
    </div>
  )
}

export default ViewBlog