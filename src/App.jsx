import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import About from './components/about';
import Contact from './components/contact';
import PageNotFound from './components/PageNotFound';

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <div>
        <h1>React-Ruuter-Dom</h1>
        <Link to={'/about'}>About</Link>
        <Link to={'/contact'}>Xontact</Link>

        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<contact />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>

    </BrowserRouter>
  )
}

export default App
