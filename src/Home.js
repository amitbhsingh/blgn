import {useState,React,useEffect } from 'react'
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home=()=>{
  const {data,isPending,error }=useFetch('http://localhost:8000/blogs')
  


  // const handleDelete=(id)=>{
  //   const newBlogs=blogs.filter(blog=>blog.id!=id);
  //   setBlogs(newBlogs);

  // }
  

  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {isPending && <div>Loading.... </div>  }
      {data && <BlogList  blogs={data} />}

    </div>
  )
}

export default Home