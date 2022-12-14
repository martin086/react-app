import { useState, useEffect } from "react";
import { consultarBDD } from "../../assets/funciones";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const {id} = useParams()
    useEffect(() => {
        consultarBDD('../json/productos.json').then(productos => {
            console.log(productos)
            const prod = productos.find(product => product.id === parseInt(id))
            setProducto(prod)
        })
        
    }, [id]);

    return (
        <div className="card mb-3 container itemDetail">
            <ItemDetail item={producto} />
        </div>
    );
}

export default ItemDetailContainer;