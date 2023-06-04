import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import AppRouter from "./router/AppRouter";

function App() {

  return (
    
    <AuthProvider>
      <CartProvider>
        <AppRouter></AppRouter>
      </CartProvider>
    </AuthProvider>
    
  );
}

export default App;