import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="navbar">
        <div className="navbar__logo">
          <h2>jump<span>.</span></h2>
        </div>
        <div className="navbar__links">
          
        </div>
        <div className="navbar__search">

        </div>
      </div>
    </div>
  )
}

export default App
