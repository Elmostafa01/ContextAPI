import CartContext from "../context/CartContext";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Checkout = () => {
  const { items } = useContext(CartContext);
  const {theme} = useContext(ThemeContext);

  return (
    <div className="mx-auto px-4 max-w-7xl mt-4">
      <h1 className={`${theme === "light" ? "text-black" : "text-white"} transition-colors text-4xl font-bold text-center mb-4`}>
        Checkout
      </h1>
      <div className="total-products mt-8 flex items-center justify-evenly">
        <p className={`${theme === "light" ? "text-black" : "text-white"} text-lg font-bold`}>Total products: {items.length}</p>
        <p className={`${theme === "light" ? "text-black" : "text-white"} text-lg font-bold`}>$0.00</p>
      </div>
    </div>
  )
}

export default Checkout
