import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

const HomeContext = createContext();

export const HomeProvider = ({ children, PRODUCTS }) => {
  const [cartItems, setCartItems] = useState({});

  // // Assuming you have a separate products object with prices
     const products = {
      1: 500, 2: 600, 3: 700,4: 1000, 5:3000, 6:400, 7:400, 8:400,
      
      
      

   };

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
        toast.error("Item removed from cart");
      }
      return updatedItems;
    });
  };

  const getTotalCartAmount = () => {
   
    return Object.entries(cartItems).reduce((total, [productId, quantity]) => {
      return total + ( products [productId] * quantity);
    }, 0);
  };

  return (
    <HomeContext.Provider value={{ cartItems, addToCart, removeFromCart, getTotalCartAmount }}>
      {children}
    </HomeContext.Provider>
  );
};

export default HomeContext;
