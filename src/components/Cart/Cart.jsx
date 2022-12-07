import { Link } from "react-router-dom";

const Cart = () => {
    return (
        <div>
            <h1>Resúmen de carrito</h1>
            <button className="btn btn-success"><Link className="nav-link" to={"/checkout"}>Checkout</Link></button>
        </div>
    );
}

export default Cart;
