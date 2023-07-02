import React from 'react'


const BlogList = ({blogs,title}) => {
  // const blogs=props.blogs
  // console.log(props,blogs)
  return (
    <div className='blog-list' >
      <h2>{title}</h2>
      {blogs.map((blog)=>(
        <div className="blog-preview" key={blog.id} >
        <h2>{blogs.author}</h2>
        <h4>Written by {blog.author}</h4>
        <p>Message {blog.body}</p>
        </div>
      ))}
    </div>
  )
}

export default BlogList