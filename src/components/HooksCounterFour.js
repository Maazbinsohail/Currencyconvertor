import React, { useEffect, useState } from 'react'

const HooksCounterFour = () => {
const [count, setCount] = useState(0)
const [name, setName] = useState('')

useEffect(() => {
    document.title = `You clicked ${count} times`
},[count])
  return (
    <>
    <div  className="border-4 border-green-900 border-solid
    bg-green-400 w-full h-12">
    <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
    <button   className="border-4 border-black"  onClick={() => setCount(count+ 1)}>Count {count} times</button>
    </div>
    
    </>
  )
}

export default HooksCounterFour
