import "./App.css";

import { Route, Routes } from "react-router-dom";

import Cart from "./pages/Cart";
import Category from "./pages/Category";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Product from "./pages/Product";

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
