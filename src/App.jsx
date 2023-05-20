import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import  CollapsibleExample from './components/NavBar/NavBar.jsx'
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Error404 from "./helpers/error";

function App() {

  return (
    <BrowserRouter>
      <CollapsibleExample></CollapsibleExample>
      <Routes>
        <Route path='/' element= { <ItemListContainer/> } />
        <Route path='/categoria/:categoriaId' element= { <ItemListContainer/> } />
        <Route path='/item/:id' element={ <ItemDetailContainer />} />
        <Route path='*' element= { <Error404/> } />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;