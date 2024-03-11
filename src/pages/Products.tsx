import { data } from "../utilities/data";
import ProductCard from "../components/ProductCard";

const Products = () => {
  return (
    <div className="mx-auto px-4 max-w-7xl mt-4">
      <h1 className="text-4xl font-bold text-center mb-8">Products</h1>
      <div className="grid grid-cols-3 gap-4">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Products;
