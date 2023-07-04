import { useEffect,useState } from "react";


const useFetch=(url)=>{
  const [data,setData]=useState(null);
  const [isPending,setisPending]=useState(true)
  const [error,setError]=useState(null);
  useEffect(()=> {
    setTimeout(()=>{
      fetch(url)
      .then(res=>{
        if(!res.ok){
          throw Error('could not fetch the data for that resouce')
        }
        return res.json();
      })
      .then(blogs=>{
        setisPending(false);
        setData(blogs);
        setError(null);
      })
      .catch(err=>{
        setisPending(false)
        setError(err.message)
      })
    },1000) 
    
  },[]);
  return {data,isPending,error}

}
export default useFetch;