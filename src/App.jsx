import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import  CollapsibleExample from './components/Navbar/Navbar.jsx'
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {

  return (
    <div style={{ backgroundColor: "#dddddd"}}>
      <CollapsibleExample></CollapsibleExample>
      <ItemListContainer greeting={"Bienvenido alumno!"}/>
    </div>
  );
}

export default App;