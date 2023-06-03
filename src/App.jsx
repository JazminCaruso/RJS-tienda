import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import  CollapsibleExample from './components/NavBar/NavBar.jsx'
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Error404 from "./helpers/error";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";

function App() {

  return (
    
    <CartProvider>

      <BrowserRouter>
        <CollapsibleExample></CollapsibleExample>
        <Routes>
          <Route path='/' element= { <ItemListContainer/> } />
          <Route path='/categories/:categoryId' element= { <ItemListContainer/> } />
          <Route path='/item/:id' element={ <ItemDetailContainer />} />
          <Route path='/cart' element={ <Cart />} />
          <Route path='*' element= { <Error404/> } />
        </Routes>
      </BrowserRouter>
    </CartProvider>
    
  );
}

export default App;