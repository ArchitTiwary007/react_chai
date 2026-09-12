import { useState,useCallback,useEffect,useRef} from 'react'
import './App.css'
function App() {
  const [length, setlength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);

  const [charAllow, setCharAllow] = useState(false)
  
  const [Password, setPassword] = useState("")

  //useRef hook (Reference hook => must import it)
  const passwordRef = useRef(null)
  
  //useCallback=>hook->(function,dependencies in form of an array)
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllow) str += "0123456789"
    if (charAllow) str += "!@#$%^&*()_+~`"
    
    for (let i = 1; i <= length; i++) {
      //generating the random numbers
      let char = Math.floor(Math.random() * str.length + 1);
      pass+=str.charAt(char)
      
    }
    setPassword(pass)
    
  }, [length,numAllow,charAllow,setPassword])
  
  const copyPasswordToClipboard = useCallback(() => { 
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,12)
    window.navigator.clipboard.writeText(Password);
  }, [Password])
  
  useEffect(() => {
    passwordGenerator()
  },[length,numAllow,charAllow,passwordGenerator])
  return (
    <>
      <div className="w-full p-5 max-w-md mx-auto shadow-md rounded-lg my-8 text-orange-500 bg-gray-800">
        <h1 className='text-white text-4xl text-center font-bold mb-4'>Password Generator</h1>
        <div className="flex rounded-lg overflow-hidden mb-4 ">
          <input type="text"
            value={Password}
            className="outline-none w-full py-3 px-4 bg-white text-black text-lg"
            placeholder='Password' readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-5 py-3 hover:bg-blue-800 text-lg font-medium rounded-none cursor-pointer'>copy
          </button>
          
        </div>
        <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input type="range"
                min={6}
                max={100}
                value={length}
                className='cursor-pointer'onChange={(e)=>{setlength(e.target.value)}}
              /><label >Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllow}
              id="numberInput"
              onChange={(e) => { setNumAllow((prev) => !prev) }} />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllow}
              id="charInput"
              onChange={(e) => { setNumAllow((prev) => !prev) }} />
            <label htmlFor="charInput">Characters</label>
          </div>
          </div>
      </div>
    </>
  )
}

export default App
