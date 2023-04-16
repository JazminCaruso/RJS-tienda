import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {

  return (
    <div>
      <Navbar/>
     
      <ItemListContainer saludo={"Hola mundo!"}/>

    </div>
  );
}

export default App;