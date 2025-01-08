
import Cards from './components/Cards'

function App() {
  let myobj={
    username:"hariom",
    age:"22"
  }
 

  return (
    
    
      <div className="flex gap-5  flex-col items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray text-gray-200" >
         <h1 className=" bg-green-400 text-black p-7 rounded-xl text-3xl font-bold underline text-center">
      tailwind Test
    </h1>
    <Cards name="hitesh" btn="hello" SomeObj={myobj}/>
   
      
        </div>
    
  )
}

export default App
