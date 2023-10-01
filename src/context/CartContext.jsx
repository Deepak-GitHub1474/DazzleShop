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
  let [productsCost, setProductsCost] = useState(0);
  let [totalCost, setTotalCost] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState([]);

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
    updateCartProductCost();
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
      updateCartProductCost()
    }
  }

  // Add quantity
  function addQuantity(productId) {
    const productToAdd = cart.find((product) => product.id === productId);
    productToAdd.quantity += 1;
    const updatedCart = [...cart];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    updateCartProductCost();
  }

  // Remove quantity
  function removeQuantity(productId) {
    const productToRemove = cart.find((product) => product.id === productId);
    if (productToRemove.quantity > 1) {
      productToRemove.quantity -= 1;
      const updatedCart = [...cart];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      updateCartProductCost();
    }
    
  }

  function updateCartProductCost() {
    // Get existing cart items from LocalStorage
    let productsCost = 0;
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

    let deliveryCharges = 40; // Assuming delivery charges is fixed for now

    savedCart.forEach((product) => {
      productsCost += product.price * product.quantity;
    });

    setProductsCost(Math.round(productsCost));
    setTotalCost(Math.round(productsCost + deliveryCharges));

  }

 // Function to remove a product from the cart and local storage
 function removeItemFromCart(productId) {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    // Calculate updated costs
    updateCartProductCost(updatedCart);
  }

  // Filter the products by it's category
 function toggleCategory(category) {
  
    if (selectedCategories.includes(category)) {
      
      setSelectedCategories((prevCategories) =>
        prevCategories.filter((prevCategory) => prevCategory !== category)
      );
    } else {
      setSelectedCategories((prevCategories) => [...prevCategories, category]);
    }
    selectedCategories.shift()
  }

  console.log(selectedCategories);
  return (
    <CartContext.Provider
      value={{
        products,
        addToCart,
        cart,
        setCart,
        addQuantity,
        removeQuantity,
        updateCartProductCost,
        productsCost,
        totalCost,
        removeItemFromCart,
        selectedCategories,
        toggleCategory,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
