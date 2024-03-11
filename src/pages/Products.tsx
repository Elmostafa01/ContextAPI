import { data } from "../utilities/data";
import ProductCard from "../components/ProductCard";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Products = () => {
  const {theme} = useContext(ThemeContext);
  
  return (
    <div className="custom-height mx-auto px-4 max-w-7xl mt-4">
      <h1 className={`${theme === "light" ? "text-black" : "text-white"}
       transition-colors text-4xl font-bold text-center mb-4`}>
        Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Products;