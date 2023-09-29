import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";

// Create a context
const CartContext = createContext();

// Custom hook to use the cart context
export function useCart() {
  return useContext(CartContext);
}

// Cart context provider component
export function CartProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const PRODUCT_URL = "https://fakestoreapi.com/products";

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await axios.get(PRODUCT_URL);
        const products = response.data;
        setProducts(products);
      } catch (error) {
        console.log("Error:", error);
      }
    }
    getProducts();
  }, []);

  useEffect(() => {
    // Get the data from local storage
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // Add a product to the cart and store in local storage
  function addToCart(productId) {
    const productToAdd = products.find(
      (product) => product.id === productId + 1
    );
    const cartProduct = cart.find((product) => product.id === productId + 1);

    if (productToAdd) {
      const updatedCart = [...cart];
      const existingCartItemIndex = updatedCart.findIndex(
        (item) => item.id === productToAdd.id
      );

      if (existingCartItemIndex !== -1) {
        // Product already in the cart, set quantity 1
        updatedCart[existingCartItemIndex].quantity = cartProduct.quantity;
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

  // Add quantity
  function addQuantity(productId) {
    const productToAdd = cart.find((product) => product.id === productId);
    productToAdd.quantity += 1;
    const updatedCart = [...cart];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  // Remove quantity
  function removeQuantity(productId) {
    const productToRemove = cart.find((product) => product.id === productId);
    if (productToRemove.quantity > 1) {
      productToRemove.quantity -= 1;
      const updatedCart = [...cart];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
    
  }

  return (
    <CartContext.Provider
      value={{
        products,
        addToCart,
        cart,
        setCart,
        addQuantity,
        removeQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
