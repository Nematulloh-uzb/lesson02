import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import About from './components/red.jsx'
import Contact from './components/blue.jsx'
import PageNotFound from './components/PageNotFound.jsx'
import Home from './components/home.jsx'
import { FaSearch } from "react-icons/fa";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="navbar">
          <div className="navbar__logo">
            <h2>jump<span>.</span></h2>
          </div>

          <div className="navbar__links">
            <Link className='Link' to='/'>Home</Link>
            <Link className='Link' to='/blue'>Blue</Link>
            <Link className='Link' to='/red'>Red</Link>
          </div>
        </div>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blue' element={<About />} />
          <Route path='/red' element={<Contact />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
      <div className="navbar__search">
        <input type="text" placeholder='Search...' />
      </div>
    </BrowserRouter>
  )
}

export default App