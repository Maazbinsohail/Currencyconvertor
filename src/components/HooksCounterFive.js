import React, { useEffect, useState } from 'react'
import axios from 'axios'
const HooksCounterFive = () => {
  const [posts, setPosts] = useState({})
  const [id , setId] = useState(1)
  const [idFromChild, setIdFromChild] = useState(1)
 
 const handleId = () => {
   setIdFromChild(id)
 }

  useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromChild}`)
          .then(res => {
              console.log(res)
              setPosts(res.data)
          })
          .catch(err => {
              console.log(err)
          })
  }, [idFromChild])
  return (
    <div>
    <input className='border-4 border-grey-900 border-solid bg-grey-400 text-center' type="text" value={id} onChange={(e) => setId(e.target.value)} />
    <button className='border-4 border-grey-900 border-solid bg-grey-400' type='buttom' onClick={handleId}>Fetch data</button>
    <div className='bg-green-400'>{posts.title}</div>
   {/* <ul>
    {
      posts.map(post =>(<li key={post.id}>{post.title}</li>))
    }
    
    </ul> */}
    </div>
  )
}

export default HooksCounterFive
