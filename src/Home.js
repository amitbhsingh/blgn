import {useState,React,useEffect } from 'react'
import BlogList from './BlogList';

const Home=()=>{
  const [blogs,setBlogs]=useState(null);
  const [isPending,setisPending]=useState(true)
  const [error,setError]=useState(null);


  // const handleDelete=(id)=>{
  //   const newBlogs=blogs.filter(blog=>blog.id!=id);
  //   setBlogs(newBlogs);

  // }
  useEffect(()=> {
    setTimeout(()=>{
      fetch('http://localhost:8000/blogss')
      .then(res=>{
        if(!res.ok){
          throw Error('could not fetch the data for that resouce')
        }
        return res.json();
      })
      .then(blogs=>{
        setisPending(false);
        setBlogs(blogs);
        setError(null);
      })
      .catch(err=>{
        setisPending(false)
        setError(err.message)
      })
    },1000) 
    
  },[]);

  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {isPending && <div>Loading.... </div>  }
      {blogs && <BlogList  blogs={blogs} />}

    </div>
  )
}

export default Home