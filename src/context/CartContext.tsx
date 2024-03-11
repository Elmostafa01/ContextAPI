import { createContext } from "react";

const CartContext = createContext(null);

export const CartProvider = ({ children }: { children: React.ReactNode}) => {
  return (
  <CartContext.Provider value={}>
    {children}
  </CartContext.Provider>
  );
};


export default CartContext;

