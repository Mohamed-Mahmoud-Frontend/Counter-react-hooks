import React ,{ useState } from "react"
import './App.css'

const App = () => {

  const [count ,setCount] = useState(0)
const handleIncrement =()=>{
  setCount(count +1)
}
const handleDecrement =()=>{
  setCount(count  - 1)
}
const reset =()=>{
  setCount(0)
}

  return (
    <div className="parent">
    <div className="child">
      
   
    <h2>Counter</h2>
    <button  onClick={handleIncrement}>increment</button>
    <h2>count = {count} </h2>
    <button onClick={handleDecrement} >decrement</button>
    <span>                  </span>     
    
    <button onClick={reset}>Reset</button>
    </div>
    
    </div>
  )
}

export default App