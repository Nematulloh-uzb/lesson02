import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import About from './components/about';
import Contact from './components/contact';
import PageNotFound from './components/PageNotFound';

import './App.css'

function App() {
h
  return (
    <BrowserRouter>
      <div>
        <h1>React-Ruuter-Dom</h1>
        <Link to={'/about'}>About</Link>
        <Link to={'/contact'}>Contact</Link>

        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>

    </BrowserRouter>
  )
}

export default App
