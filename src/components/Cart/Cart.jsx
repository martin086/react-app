import { Link } from "react-router-dom";
import { useCarritoContext } from "../../context/CarritoContext";
import { useDarkModeContext } from "../../context/DarkModeContext";

const Cart = () => {
    const {darkMode} = useDarkModeContext()
    const {carrito, emptyCart, totalPrice, removeItem} = useCarritoContext()
    return (
        <>
            {carrito.length === 0 ?
            <>
                <h1>Carrito vacío</h1>
                <button className={`btn mx-1 ${darkMode ? 'btn-secondary' : 'btn-warning'}`}><Link className="nav-link" to={"/"}>Continuar comprando</Link></button>
            </>
            :
            <div className="container cartContainer">
                {
                    carrito.map(prod => 
                        <div className="card mb-3" key={prod.id} style={{maxWidth: '540px'}}>
                            <div className="row g-0 justify-content-center">
                                <div className="col-md-4">
                                    <img src={prod.imagen} alt="Producto" className="img-fluid rounded-start" />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className={`card-body ${darkMode ? 'cardBodyDark' : 'cardBody' }`}>
                                    <h5 className="card-title">{`${prod.nombre} ${prod.tipo}`}</h5>
                                    <p className="card-text">Cantidad: {prod.cant}</p>
                                    <p className="card-text">Precio Unitario: ${new Intl.NumberFormat('de-De').format(prod.precio)}</p>
                                    <p className="card-text">Valor Total: ${new Intl.NumberFormat('de-De').format(prod.precio * prod.cant)}</p>
                                </div>
                                <button className="btn btn-danger m-2" onClick={() => removeItem(prod.id)}>Eliminar Producto</button>
                            </div>
                        </div>    
                    )
                }
                
                <div>
                    <p>Resumen de Compra: ${new Intl.NumberFormat('de-De').format(totalPrice())}</p>
                    <button className="btn btn-danger" onClick={emptyCart}>Vaciar Carrito</button>
                    <button className={`btn mx-1 ${darkMode ? 'btn-secondary' : 'btn-warning'}`}><Link className="nav-link" to={"/"}>Continuar comprando</Link></button>
                    <button className={`btn mx-1 ${darkMode ? 'btn-primary' : 'btn-success'}`}><Link className="nav-link" to={"/checkout"}>Checkout</Link></button>
                </div>    
            </div>
            }
        </>
    );
}

export default Cart;
