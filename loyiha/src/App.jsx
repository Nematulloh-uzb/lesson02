import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import About from './components/red.jsx';
import Contact from './components/blue.jsx';
import PageNotFound from './components/PageNotFound';
import Home from './components/home.jsx'
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
          <Link className='Link' to={'/'}>Home</Link>
          <Link className='Link' to={'/blue'}>Blue</Link>
          <Link className='Link' to={'/red'}>Red</Link>
        </div>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blue' element={<About />} />
          <Route path='/red' element={<Contact />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
      <div className="navbar__search">

      </div>
    </div>
  )
}

export default App