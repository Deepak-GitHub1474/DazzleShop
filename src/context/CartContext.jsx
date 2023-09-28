import axios from 'axios';
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context
const CartContext = createContext();

// Custom hook to use the cart context
export function useCart() {
  return useContext(CartContext);
}

// Cart context provider component
export function CartProvider({ children }) {

  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  const PRODUCT_URL = 'https://fakestoreapi.com/products'

  useEffect(() => {
    async function getProducts() {
        try {
          const response = await axios.get(PRODUCT_URL);
          const products = response.data;
          setProducts(products);
        } catch (error) {
          console.log('Error:', error);
        }
      }
      getProducts()
  }, []);

  useEffect(() => {
    // Get the data from local storage
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // Add a product to the cart
  function addToCart(productId) {
    const productToAdd = products.find((product) => product.id === productId + 1);

    if (productToAdd) {
      const updatedCart = [...cart];
      const existingCartItemIndex = updatedCart.findIndex(item => item.id === productToAdd.id);

      if (existingCartItemIndex !== -1) {
        // Product already in the cart, set quantity 1
        updatedCart[existingCartItemIndex].quantity = 1;
      } else {
        // Product not in the cart, add it
        productToAdd.quantity = 1;
        updatedCart.push(productToAdd);
      }

      setCart(updatedCart);

      // Save the entire updated cart to local storage
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  }

  return (
    <CartContext.Provider value={{ products, addToCart, cart }}>
      {children}
    </CartContext.Provider>
  );
}
