import {useState,React } from 'react'

const Home=()=>{
  const [name,setName]=useState('Amit');
  const [age,SetAge]=useState(38)

const handleClick=()=>{
  setName('Singh');
  SetAge(39)
  
}

// const Home=()=>{
//   const [name,setName]=useState('Amit');
//   const [age,SetAge]=useState(38)

// const handleClick=()=>{
//   setName('Singh');
//   SetAge(39)
  
// }

  return (
    <div className='home'>
    <h2>Homepage</h2>
    <p>{name} is {age}</p>
    
    <button onClick={handleClick}>Click</button>
    
    </div>
  )
}

export default Home