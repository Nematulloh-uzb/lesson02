import React from 'react'
import img from '../assets/img.jpg'
import '../components/PageNotFound.css'

function PageNotFound() {
  return (
    <div className='name'>
        <h1 className='bir'>PageNotFound 404</h1>
        <img src={img} alt="" width={300} />
    </div>
  )
}

export default PageNotFound