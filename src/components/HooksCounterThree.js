import React, { useState } from 'react'

const HooksCounterThree = () => {
    const [item, setItem] = useState([])
    const addItem = () => {
        setItem([...item, {
            id: item.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }
  return (
    <div   className="ring-2 ring-offset-2 hover:ring-offset-4">
      <button   className="border-4 border-green-900 border-solid
    bg-green-400 w-full h-12" onClick={addItem}>Add a number</button>
      <ul>
        {item.map(item => <li key={item.id}>{item.value}</li>)}
      </ul>
    </div>
  )
}

export default HooksCounterThree
