import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar';
import Search from './Search/Search';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/product/:id' element={<ItemDetailContainer/>}/>
          <Route path='/category/:id' element={<ItemListContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          {/* <Search busqueda={"Buscar Productos"}/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
