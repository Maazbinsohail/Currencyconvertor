import React, { useState } from 'react'

const HooksCounter = () => {
     const initailCount = 0
    const [count, setCount] = useState(initailCount)

    const incrementFive = () => {
      for (let i = 0; i < 5 ; i++) {
        setCount(prevCount => prevCount + 1)
        
      }
     
    }
  return (
    <>
     <div className='mt-5'>
     Count: {count}
     <button className='ms-2 ring-2 ring-offset-2 hover:ring-offset-4 bg-black text-white' onClick={() => setCount(initailCount)}>Reset</button>
     <button className='ms-2 ring-2 ring-offset-2 hover:ring-offset-4 bg-black text-white' onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
     <button className='ms-2 ring-2 ring-offset-2 hover:ring-offset-4 bg-black text-white' onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
     <button className='ms-2 ring-2 ring-offset-2 hover:ring-offset-4 bg-black text-white'  onClick={incrementFive}>Increment 5</button>
     </div>
     
     </>
     )

}

export default HooksCounter
