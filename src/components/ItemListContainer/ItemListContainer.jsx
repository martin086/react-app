import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { consultarBDD } from "../../assets/funciones.js";
import { useParams } from "react-router-dom";
import { cargarBDD } from "../../assets/firebase";

//Consultar BDD
const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const {category} = useParams()
    useEffect(() => {
        if(category) {
          consultarBDD('../json/productos.json').then(products => {
            const productsList = products.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === parseInt(category));
            const cardProductos = ItemList({productsList})
            setProductos(cardProductos)
          })
        } else {
          consultarBDD('./json/productos.json').then(products => {
            const productsList = products.filter(prod => prod.stock > 0)
            const cardProductos = ItemList({productsList})
            setProductos(cardProductos)
          })
        }

        //cargarBDD().then(productos => console.log(productos))
          
    }, [category]);
    console.log(productos);
    
    return (
        
          <div className="row cardProductos card-img-top">
              {productos}
          </div>
        

    );
}

export default ItemListContainer;
