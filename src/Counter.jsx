import React, { useState } from 'react'

function Counter({start=0, step=0,danger=false} ) {
    let [Counter, setCounter] = useState(+start);
    const handleClick = (type) => {
    if (type === 'minus') {
        setCounter(Counter - step);
        return}
    setCounter(Counter + step);
  }
  const color = danger ? "bg-red-500" : "bg-blue-500";
  return (
    <div className='flex items-center gap-4'>
        <button className={'btn ${danger ? "red" : ""}'} onClick={() => handleClick('minus')}>-</button>
        <p className='text-4xl font-bold '>{Counter}</p>
        <button className={'btn ${danger ? "red" : ""'} onClick={() => handleClick('plus')}>+</button>
    </div>
  )
}

export default Counter;