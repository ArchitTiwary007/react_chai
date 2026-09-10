import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(50)//hooks(varible,function)
  
  // let counter = 50

  const addValue = () => {
    // console.log("Value added", Math.random());
    console.log("Clicked",counter)
    // counter = counter + 1;
    setCounter(counter+1)
  }

  const decValue = () => {
    // console.log("Value removed:", Math.random());
    console.log("Clicked", counter);
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Chai aur coding</h1>
      <h2>Counter value:{counter}</h2>

      <button onClick={addValue}>Add Value:{counter}</button><br />
      <button onClick={decValue}>Decrease Value:{counter}</button>
    </>
  )
}

export default App
