import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  
  const [count, setCount] = useState(0);
  let myObj = {
    username: "archit",
    age:21
  }
  let newArr=[1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-blue-600 p-4 rounded-xl mb-5'>TailWind test</h1> 
      <Card username="chaiaurcode" btnText="Click Here" />
      <Card username="lambo" btnText="Click Here"/>
    
    </>
  )
}

export default App
