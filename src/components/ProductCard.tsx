import { Product } from "../utilities/data";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-slate-50 rounded-lg p-4 w-[300px] flex items-center justify-center border">
      <div className="w-full">
          <img src={product.image} alt={product.name} className="w-full rounded-md h-60 object-cover" />
          <h1 className="text-2xl font-bold mt-2">{product.name}</h1>
          <div className="flex items-center justify-between">
            <p className="text-lg text-slate-400 font-bold mt-2">${product.price}</p>
            <button className="bg-slate-900 hover:bg-slate-600 active:scale-[1.05]
             text-white font-bold px-4 py-2 rounded-md mt-2">
                Add to cart
            </button>
          </div>
      </div>
    </div>
  )
}

export default ProductCard
