import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import About from './components/about';
import Contact from './components/contact';
import PageNotFound from './components/PageNotFound';

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <div className='box'>
        <h1 className='first'>React-Router-Dom</h1>
        <div className="container">
          <div className="container__links">
            <Link className='Link' to={'/about'}>About</Link>
            <Link className='Link' to={'/contact'}>Contact</Link>
          </div>

          <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </div>
      </div>

    </BrowserRouter>
  )
}

export default App
