import './App.css';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Navbar from './Navbar/Navbar';
import Search from './Search/Search';
import ItemCount from './ItemCount/ItemCount';

const App = () => {

  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={"¡Bienvenido a nuestra tienda!"}/>
      <Search busqueda={"Buscar Productos"}/>
      <ItemCount stock={10}/>
    </>
  );
}

export default App;
