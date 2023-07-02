import {useState,React } from 'react'
import BlogList from './BlogList';

const Home=()=>{
  const [blogs,setBlogs]=useState([
    {title:'How to learn anything',body:'right now is the time you need to start',author:'Amit',id:1},
    {title:'maybe not everything',body:'maybe plan ahead',author:'Kum',id:2},
    {title:'How to learn anything',body:'maybe desctructer the plan',author:'Singh',id:3}
  ]);


  return (
    <div className='home'>
      <BlogList  blogs={blogs} title="All Blog"  />
      <BlogList  blogs={blogs.filter((blog=>blog.author==='Amit' ))}title="Amit blog"  />

    </div>
  )
}

export default Home