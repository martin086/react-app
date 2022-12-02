import {Link} from "react-router-dom";
//Generamos la Card de Producto

const Item = ({prod}) => {
    return (
    <>
        <div>
            <div className="card border-light mb-3 cardProducto" >
                    <img src={`../img/${prod.imagen}`} className="card-img-top" alt="..." />
                    <div className="card-body cardBody">
                        <h5 className="card-title">{prod.nombre}</h5>
                        <p className="card-text">{prod.tipo} x {prod.unidad}</p>
                        <p className="card-text">${new Intl.NumberFormat('de-DE').format(prod.precio)}</p>
                        <button className="btn btn-dark"><Link className="nav-link" to={`product/${prod.id}`}>Ver Producto</Link></button>
                    </div>
            </div>
        </div>
    
        
    </>
    );
}

export default Item;
