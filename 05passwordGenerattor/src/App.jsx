import { useCallback, useEffect, useRef, useState } from 'react'



function App() {
  const [length, setLength] = useState(8)
  const[numberAllowed, setNumberAllowed]=useState(false)
  const[charAllowed, setCharAllowed]=useState(false)
  const [password, setPassword]=useState("")

  // useRef hook 
  const passwordRef=useRef(null)

  const PasswordGenerator=useCallback(()=>{
    let pass=""
    let str="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"

    if (numberAllowed) str+="1234567890"
    if(charAllowed) str+="!@#$%^&*()_+{}[]~`"

    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
      
    }

    setPassword(pass)


  } ,[length , numberAllowed, charAllowed, setPassword])


  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)},
[password])

  useEffect(()=>{
    PasswordGenerator()
  },[length,numberAllowed,charAllowed,PasswordGenerator])

  return (
    <>

      <div className=' w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500  bg-gray-800 text-orange-500'>
      <h1 className='text-center text-4xl text-white my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
        value={password}
        className='outline-none w-full py-1 px-3' 
        placeholder='Password'
        readOnly 
        ref={passwordRef}
        />
        
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        onClick={copyPasswordToClipboard}
        >copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>

        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          
          onChange={(e)=>{setLength(e.target.value)}} />
          <label >length:{length}</label>

        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={numberAllowed}
          id='numberInput'
          
          onChange={()=>{setNumberAllowed((prev)=>!prev);

          }} 
          />
          <label htmlFor='numberInput' >Numbers</label>

        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={charAllowed }
          id='characterInput'
          
          onChange={()=>{setCharAllowed((prev)=>!prev);

          }} 
          />
          <label htmlFor='characterInput' >Character</label>

        </div>

      </div>

      </div>
      </>
  )
}

export default App
