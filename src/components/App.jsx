import './App.css';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Navbar from './Navbar/Navbar';
import Search from './Search/Search';

const App = () => {

  return (
    <>
      <Navbar/>
      <ItemListContainer/>
      <Search busqueda={"Buscar Productos"}/>
    </>
  );
}

export default App;
