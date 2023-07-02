import React from 'react'


const BlogList = ({blogs}) => {
  // const blogs=props.blogs
  // console.log(props,blogs)
  return (
    <div className='blog-list' >
      {blogs.map((blog)=>(
        <div className="blog-preview" key={blog.id} >
        <h2>{blog.author}</h2>
        <h4>Written by {blog.author}</h4>
        <p>Mesage {blog.body}</p>
        </div>
      ))}
    </div>
  )
}

export default BlogList