import {useState} from "react"

function App() {
  const [color,setColor]=useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-2 px-4"> 
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button
            onClick={()=>setColor("red")}
            className="outline-none px-4 py-1 rounded full text-white shadow-large" style={{ backgroundColor: "red" }}>Red</button>
          <button
            onClick={()=>setColor("green")}
            className="outline-none px-4 py-1 rounded full text-white shadow-large" style={{ backgroundColor: "green" }}>green</button>
          <button
            onClick={()=>setColor("blue")}
            className="outline-none px-4 py-1 rounded full text-white shadow-large" style={{ backgroundColor: "blue" }}>blue</button>
          <button
            onClick={()=>setColor("orange")}
            className="outline-none px-4 py-1 rounded full text-white shadow-large" style={{ backgroundColor: "orange" }}>orange</button>
          <button
            onClick={()=>setColor("brown")}
            className="outline-none px-4 py-1 rounded full text-white shadow-large" style={{ backgroundColor: "brown" }}>brown</button>
        </div>
      </div>
    </div>
  )
}

export default App
