
import Cart from "../components/Cart/Cart";
import CollapsibleExample from "../components/Navbar/Navbar";
import Login from "../components/Login/Login";
import Register from "../components/Login/Register";
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import { ItemListContainerPrincipal } from "../components/ItemListContainer/ItemListContainer2";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Checkout from "../components/Checkout/Checkout";
import Informacion from "../components/Informacion/Informacion";

const AppRouter = () => {
    const { user } = useContext(AuthContext)

    return (
      <BrowserRouter>  
        {
          user.logged 
          ? <>
              <CollapsibleExample></CollapsibleExample>
              <Routes>
                <Route path='/' element= { <ItemListContainerPrincipal/> } />
                <Route path='/categories/:categoryId' element= { <ItemListContainer/> } />
                <Route path='/item/:id' element={ <ItemDetailContainer />} />
                <Route path='/informacion' element={ <Informacion />} />
                <Route path='/cart' element={ <Cart />} />
                <Route path='/checkout' element={ <Checkout />} />
                <Route path='*' element={ <Navigate to={"/"} /> }/>
              </Routes>
            </>
          : <>
            <CollapsibleExample></CollapsibleExample>
            <Routes>
                <Route path='/' element= { <ItemListContainerPrincipal/> } />
                <Route path='/categories/:categoryId' element= { <ItemListContainer/> } />
                <Route path='/item/:id' element={ <ItemDetailContainer />} />
                <Route path='/informacion' element={ <Informacion />} />
                <Route path='/login' element= { <Login />} />
                <Route path='/register' element= { <Register />} />
                <Route path='/cart' element={ <Cart />} />
                <Route path='*' element={ <Navigate to={"/"} /> }/>
            </Routes>
            </>
        }
    </BrowserRouter>
    )
}

export default AppRouter