import {Link} from 'react-router-dom';

export default function Categories() {
  return (
    <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Categorías</a>
        <div className="dropdown-menu">
            <a className="dropdown-item" href="#">Caño de Cobre</a>
            <a className="dropdown-item" href="#">Aislación</a>
            <a className="dropdown-item" href="#">Gases Refrigerantes</a>
            <a className="dropdown-item" href="#">Cable Taller</a>
            <a className="dropdown-item" href="#">Manguera Cristal</a>
            <a className="dropdown-item" href="#">Cintas PVC</a>
            <a className="dropdown-item" href="#">Ménsulas</a>
            <a className="dropdown-item" href="#">Motocompresores</a>
            <a className="dropdown-item" href="#">Herramientas</a>
            <a className="dropdown-item" href="#">Accesorios</a>
            <a className="dropdown-item" href="#">Varios</a>
            <a className="dropdown-item" href="#">Aire Acondicionado</a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="#"><Link className="nav-item" to="/"></Link>Ver Todas</a>
        </div>
    </li>
  )
}
