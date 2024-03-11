import { Product } from "../utilities/data";
import CartContext from '../context/CartContext';
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ProductCard = ({ product }: { product: Product }) => {
  const {theme} = useContext(ThemeContext);
  const { addToCart } = useContext(CartContext);

  const item = {
    name: product.name,
    price: product.price,
  }

  return (
    <div className={`cursor-pointer ${theme === 'light' ? 'bg-slate-50' : 'bg-slate-700'} 
    mx-auto rounded-lg p-4 w-[300px] flex items-center border  ${theme === 'light' ? 'border' : 'border-slate-500'}`}>
      <div className="w-full">
          <img src={product.image} alt={product.name} className="w-full rounded-md h-60 object-cover" />
          <h1 className={`line-name ${theme === 'light' ? 'text-slate-900' : 'text-sky-100'} text-2xl font-bold mt-2`}>
            {product.name}
          </h1>
          <div className="flex items-center justify-between">
            <p className="text-lg text-slate-400 font-bold mt-2">${product.price}</p>
            <button onClick={() => addToCart(item)}
             className={`${theme === 'light' ? 'bg-slate-50' : 'bg-sky-600 hover:bg-sky-500'}
             bg-slate-900 hover:bg-slate-600 active:scale-[1.05]
             text-white font-bold px-4 py-2 rounded-md mt-2`}>
                Add to cart
            </button>
          </div>
      </div>
    </div>
  )
}

export default ProductCard
