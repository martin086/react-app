import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
const ItemDetail = ({item}) => {
    
    const onAdd = (contador) => {
        console.log(contador)
    }
    console.log(item)
    return (
        <div className="row g-0">
            <div className="col-md-4">
                <img src={`../img/${item.imagen}`} alt="" className="img-fluid rounded-start"/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{item.nombre}</h5>
                    <p className="card-text">Tipo: {item.tipo} </p>
                    <p className="card-text">Precio: $ {new Intl.NumberFormat('de-DE').format(item.precio)} </p>
                    <p className="card-text">Stock: {item.stock} </p>
                    <ItemCount stock={item.stock} onAdd={onAdd}/><br/>
                    <button className="btn btn-info mt-2"><Link className="nav-link" to={"/cart"}>Ir al Carrito</Link></button>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
