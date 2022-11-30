import Item from "../Item/Item";
//Modifico el array de objetos. 
const ItemList = ({productsList}) => {
    return (
        <div>
            {productsList.map(product => <Item key={product.id} prod={product}/>)}
        </div>
    );
} 

export default ItemList;