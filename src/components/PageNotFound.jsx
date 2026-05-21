import React from 'react'
import img from '../assets/img.jpg'

function PageNotFound() {
  return (
    <div>
        <h1>PageNotFound 404</h1>
        <img src={img} alt="" width={300} />
    </div>
  )
}

export default PageNotFound