import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  
  const addToCart = (productId) => {
    setCartItems((prevItems) => {
        const updatedItems = { ...prevItems };
        if (updatedItems[productId]) {
            updatedItems[productId] += 1;
        } else {
            updatedItems[productId] = 1;
        }
        toast.success("Item added to cart");
        return updatedItems;
    });
};

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const updatedItems = { ...prevItems };
      if (updatedItems[productId] > 0) {
        updatedItems[productId] -= 1;
      }
      if (updatedItems[productId] === 0) {
        delete updatedItems[productId];
        toast.success("item remove successfully")
      }
     
      return updatedItems;
    });
  };
  const getTotalCartAmount = () => {
    return Object.values(cartItems).reduce((a, b) => a + b, 0);
  };

  return (
    <HomeContext.Provider value={{ cartItems, addToCart, removeFromCart, getTotalCartAmount }}>
      {children}
    </HomeContext.Provider>
  );
};

export default HomeContext;
