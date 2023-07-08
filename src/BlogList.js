import { Link } from "react-router-dom"


const BlogList = ({blogs,title}) => {
  // const blogs=props.blogs
  // console.log(props,blogs)
  return (
    <div className='blog-list' >
      <h2>{title}</h2>
      {blogs.map((blog)=>(
        <div className="blog-preview" key={blog.id} >
          <Link to={`/blogs/${blog.id}`}>
        <h2>{blog.author}</h2>
        <h4> {blog.title}</h4>
        <h2>{blogs.title}</h2>
        <h4>Written by {blog.author}</h4>
        </Link>
        <p>Message {blog.body}</p>
        
        {/* <button onClick={()=> handleDelete(blog.id)} className='delete-btn' >Delete</button> */}
        </div>
      ))}
    </div>
  )
}

export default BlogList