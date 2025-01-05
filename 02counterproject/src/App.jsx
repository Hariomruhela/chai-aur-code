import { useState } from 'react'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const AddValue=()=>{
   // count=count+1
   //setCount(count)
    setCount(count+1)
  }
  const RemoveValue =()=>{
    // count=count-1
   //setCount(count)
    setCount(count-1)
  }
  return (
    <>
      <h1>chai aur code</h1>
      <h3>Counter value{count}</h3>

      <button onClick={AddValue}>Add</button>
      <br />
      <br />

      <button onClick={RemoveValue}>Remove</button>
       
    </>
  )
}

export default App
