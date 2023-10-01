import "./App.css";

import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import PageNotFound from "./pages/PageNotFound";
import Cart from "./pages/Cart";
import Category from "./pages/Category";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/product/:id" element={<Product />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/category" element={<Category />}/>
      <Route path="*" element={<PageNotFound />}/>
    </Routes>
  );
}

export default App;
