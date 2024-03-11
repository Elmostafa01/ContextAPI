import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import { CartProvider } from "./context/CartContext";
import Checkout from "./pages/Checkout";
import {useContext} from "react";
import { ThemeContext } from "./context/ThemeContext";


function App() {

  const {theme} = useContext(ThemeContext);

  return (

    <div className={`h-screen w-screen ${theme === "light" ? "bg-slate-100" : "bg-slate-900"} transition-colors`}>
        <CartProvider>
          <Router>
            <Navbar />
              <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/checkout" element={<Checkout />} />
              </Routes>
          </Router>
        </CartProvider>
    </div>
  )
}

export default App;
//{theme === "light" ? "bg-slate-50" : "bg-slate-600"}