import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import  CollapsibleExample from './components/Navbar/Navbar.jsx'
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <CollapsibleExample></CollapsibleExample>
      <Routes>
        <Route path='/' element= { <ItemListContainer/> } />
        <Route path='/category/:categoryId' element= { <ItemListContainer/> } />
        <Route path='/item/:id' element={ <ItemDetailContainer />} />
        <Route path='*' element= { <Navigate to={"/"}/> } />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;