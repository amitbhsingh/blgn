import {useState,React,useEffect } from 'react'
import BlogList from './BlogList';

const Home=()=>{
  const [blogs,setBlogs]=useState([
    {title:'How to learn anything',body:'right now is the time you need to start',author:'Amit',id:1},
    {title:'maybe not everything',body:'maybe plan ahead',author:'Kum',id:2},
    {title:'How to learn anything',body:'maybe desctructer the plan',author:'Singh',id:3}
  ]);
  
  const [firstName,setfirstName]=useState('Jerremy')

  const handleDelete=(id)=>{
    const newBlogs=blogs.filter(blog=>blog.id!=id);
    setBlogs(newBlogs);

  }
  useEffect(()=> {
    console.log('use effect ran')
    console.log(firstName)

  },[firstName]);


  return (
    <div className='home'>
      <BlogList  blogs={blogs} title="All Blog" handleDelete={handleDelete} />
      <p>{firstName}</p>
      <button onClick={()=> setfirstName('Tenadu')}>Change Name</button>
      
      

    </div>
  )
}

export default Home