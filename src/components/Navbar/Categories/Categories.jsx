import React from 'react'

export default function Categories() {
  return (
    <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Categorías</a>
        <div className="dropdown-menu">
            <a className="dropdown-item" href="#">Caño de Cobre</a>
            <a className="dropdown-item" href="#">Aislación</a>
            <a className="dropdown-item" href="#">Gases Refrigerantes</a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="#">Ver Todas</a>
        </div>
    </li>
  )
}
