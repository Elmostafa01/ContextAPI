import { createContext, useState } from "react";

export type CartItem = {
  name: string;
  price: number;
};

interface CartContextType {
    items: CartItem[];
    addToCart: (item: CartItem) => void;
  }

  const CartContext = createContext<CartContextType>({
    items: [],
    addToCart: () => {},
  });

export const CartProvider = ({ children }: { children: React.ReactNode}) => {
    const [items, setItems] = useState<CartItem[]>([]);

    const addToCart = ({name,price} : CartItem) => {
      setItems((prevState) => [...prevState, {name, price}]);
    };

  return (
  <CartContext.Provider value={{ items, addToCart }}>
    {children}
  </CartContext.Provider>
  );
};

export default CartContext;

