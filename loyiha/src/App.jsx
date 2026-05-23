import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import About from './components/about';
import Contact from './components/contact';
import PageNotFound from './components/PageNotFound';
import Home from './components/home'
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
          <Link className='Link' to={'/about'}>About</Link>
          <Link className='Link' to={'/contact'}>Contact</Link>
        </div>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
      <div className="navbar__search">

      </div>
    </div>
  )
}

export default App



function App() {

  return (
    <BrowserRouter>
      <div className='box'>
        <h1 className='first'>React-Router-Dom</h1>

      </div>

    </BrowserRouter>
  )
}