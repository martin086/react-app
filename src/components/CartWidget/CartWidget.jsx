import React from 'react'
import { Link } from 'react-router-dom'

export default function CartWidget() {
  return (
    <>
    <button className="btn btn-primary active">
      <Link className="nav-link active" to={"/cart"}>
        <i className="fa-solid fa-cart-shopping"></i>
          <span className="cantCarrito">0</span>
      </Link>
    </button>
    </>
        
      
  )
}
