import React from 'react'

export default function CartWidget() {
  return (
    <ul className="navbar-nav me-right">
    <li className="nav-item">
        <button className="nav-link active" href="#"><i className="fa-solid fa-cart-shopping"></i></button>
    </li>
    <p>0</p>
    </ul>
  )
}
