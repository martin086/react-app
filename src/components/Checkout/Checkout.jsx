import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createOC, getOC, getProducto, updateProducto } from '../../assets/firebase';
import { useCarritoContext } from '../../context/CarritoContext';
import { toast } from 'react-toastify';
import OrderForm from './Form/Form';

const Checkout = () => {

    const {totalPrice, carrito, emptyCart} = useCarritoContext();
    const datosFormulario = React.useRef();
    let navigate = useNavigate();

    const consultarFormulario = (e) => {
        e.preventDefault()
        console.log(datosFormulario)
        const datForm = new FormData(datosFormulario.current)
        const cliente = Object.fromEntries(datForm)

        const aux = [...carrito]
        aux.forEach(prodCarrito => {
            getProducto(prodCarrito.id).then(prodBDD => {
                if(prodBDD.stock >= prodCarrito.cant) {
                    prodBDD.stock -= prodCarrito.cant
                    updateProducto(prodCarrito.id, prodBDD)
                } else {
                    toast.error(`El producto ${prodBDD.nombre} no tiene stock disponible.`)
                    emptyCart() //removeItem(prodBDD.id)
                    navigate("/")
                }
            })
        })

        createOC(cliente, totalPrice(), new Date().toISOString().slice(0,10)).then(ordenCompra => {
            getOC(ordenCompra.id).then(item => {
                toast.success(`¡Gracias por su compra! Su n° de orden es: ${item.id}`)
                emptyCart()
                e.target.reset()
                navigate("/")
            }).catch(error => {
                toast.error("Su orden no pudo ser generada.")
                console.log(error)
            })
        })
        console.log(cliente)
        
    }

    return (
        <div className="container">
            <OrderForm onSubmit={consultarFormulario} innerRef={datosFormulario}/>
            {/* <form onSubmit={consultarFormulario} ref={datosFormulario}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                    <input type="text" className="form-control" name="nombre" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email2" className="form-label">Repetir Email</label>
                    <input type="email" className="form-control" name="email2" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="dni" className="form-label">DNI</label>
                    <input type="number" className="form-control" name="dni" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="celular" className="form-label">Numero telefonico</label>
                    <input type="number" className="form-control" name="celular" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className="form-label">Dirección</label>
                    <input type="text" className="form-control" name="direccion" required/>
                </div>
                <button type="submit" className="btn btn-primary">Finalizar Compra</button>
            </form> */}
        </div>
    );
}

export default Checkout;
