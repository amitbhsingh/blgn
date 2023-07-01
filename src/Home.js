import {useState,React } from 'react'

const Home=()=>{
  const [blog,setBlogs]=useState([
    {title:'How to learn anything',body:'right now is the time you need to start',author:'Amit',id:1},
    {title:'maybe not everything',body:'maybe plan ahead',author:'Kum',id:2},
    {title:'How to learn anything',body:'maybe desctructer the plan',author:'Singh',id:3}
  ]);


  return (
    <div className='home'>
      {blog.map((blog)=>(
        <div className="blog-preview" key={blog.id} >
        <h2>{blog.author}</h2>
        <h4>Written by {blog.author}</h4>
        <p>Mesage {blog.body}</p>
        </div>
       ))}
       
    </div>
  )
}

export default Home