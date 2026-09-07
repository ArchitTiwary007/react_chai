import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


// const reactElem = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target:'_blank'
//     },
//     children:'Click to visit google'
// }
// const ReactElem = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target:'_blank'
//     },
//     children:'Click to visit google'
// }

const anotherElem = (
  <a href="https://youtube.com" target='_blank'>VISIT YT</a>
)


const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'click me to visit'
)

function MyApp() {
  return (
    <div>
      <h1>Custom App!</h1>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    // <MyApp />
  // </StrictMode>

  // <reactElem />
  // ReactElem //syntactical error!!
  reactElement

  // anotherElem//object ye 
)
