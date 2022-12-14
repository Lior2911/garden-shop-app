import { createContext, useContext, useState } from "react";
import { ShopingCart } from "../components/features/shopingCart/shopingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";

const ShoppingCartContext = createContext({});

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}



export function ShoppingCartProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItem, setCartItem] = useLocalStorage("shopping cart",[]);


  const cartQuantity = cartItem.reduce((quantity, item) => item?.quantity + quantity,0);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);



  function getItemQuantity(id) {
    return cartItem.find(item => item?.id === id)?.quantity || 0;
  }


  function increaseCartQuantity(id) {
    setCartItem(currItems => {
      if (currItems.find(item => item?.id === id)==null) {
        return [...currItems , {id , quantity :1}]
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            
            return { ...item, quantity: item.quantity + 1 };
          }else{
            return item
          }
        });
      }
    });
  }
  function decreaseCartQuantity(id) {
    setCartItem(currItems => {
      if (currItems.find(item => item.id === id)?.quantity===1) {
        return currItems.filter(item=> item.id !== id)
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            
            return { ...item, quantity: item.quantity - 1 };
          }else{
            return item
          }
        });
      }
    });
  }


  function removeFromCart(id) {
    setCartItem((currItems) => {
      return currItems.filter(item => item.id !== id);
    });
  }
  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartQuantity,
        cartItem
      }}
    >
      {children}
      <ShopingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
}
