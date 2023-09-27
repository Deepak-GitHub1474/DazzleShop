import "./App.css";

import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/product/:id" element={<Product />}/>
      <Route path="*" element={<PageNotFound />}/>
    </Routes>
  );
}

export default App;
