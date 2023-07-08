import React, { useState } from 'react'


const Create = () => {
  const [title,setTittle]=useState('');
  const [body,setBody]=useState('');
  const [author,setAuthor]=useState('amit');
  return (
    <div className='create'>
      <h2>Add a New Blog</h2>
      <form>
        <label>Blog title:</label>
        <input
        type='text'
        required
        value={title}
        onChange={(e)=>setTittle(e.target.value)}
        />
        <textarea 
        required
        value={body}
        onChange={(e)=>setBody(e.target.value)}
        >
        </textarea>
      </form>
      <label>Blog author:</label>
      <select
      value={author}
      onChange={(e)=> setAuthor(e.target.value)} >
      <option value='mario'> mario</option>
      <option value='yoshi'> yoshi</option>
      </select>
      <button>Add Blog</button>
      <p>Title{title}</p>
      <p>Body{body}</p>
      <p>Written by {author}</p>
    </div>
  )
}

export default Create