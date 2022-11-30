import './App.css';
import Navbar from './Navbar/Navbar';
import Search from './Search/Search';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';

const App = () => {

  return (
    <>
      <Navbar/>
      <Search busqueda={"Buscar Productos"}/>
      <ItemListContainer/>
      <ItemDetailContainer/>
    </>
  );
}

export default App;
