import { useState } from "react"

function App() {
  const [color,setColor] = useState("olive");

  return (
    
     <div className ="w-full h-screen duration-200"
     style={{backgroundColor :color}}>
      <div className="fixed flex flex-wrap bottom-12 inset-x-0 px-2 justify-center">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={()=> setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg animate-bounce"
          style={{backgroundColor:"red"}}
          >Red</button>
          <button onClick={()=> setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg animate-bounce"
          style={{backgroundColor:"green"}}
          >Green</button>
          <button onClick={()=> setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg animate-bounce"
          style={{backgroundColor:"blue"}}
          >Blue</button>
          <button onClick={()=> setColor("yellow")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg animate-bounce"
          style={{backgroundColor:"yellow"}}
          >Yellow</button>
          <button onClick={()=> setColor("gray")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg animate-bounce"
          style={{backgroundColor:"gray"}}
          >Gray</button>
          <button onClick={()=> setColor("pink")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg animate-bounce"
          style={{backgroundColor:"pink"}}
          >Pink</button>
          <button onClick={()=> setColor("white")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg animate-bounce"
          style={{backgroundColor:"white"}}
          >White</button>
          <button onClick={()=> setColor("purple")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg animate-bounce"
          style={{backgroundColor:"purple"}}
          >Purple</button>
          <button onClick={()=> setColor("olive")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg animate-bounce"
          style={{backgroundColor:"olive"}}
          >Olive</button>
          <button onClick={()=> setColor("lavender")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg animate-bounce"
          style={{backgroundColor:"lavender"}}
          >Lavender</button>
        </div>
      </div>
     </div>
  )
}

export default App