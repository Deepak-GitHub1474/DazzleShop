import "./App.css";

import { Route, Routes } from "react-router-dom";

import Cart from "./pages/Cart";
import Category from "./pages/Category";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Product from "./pages/Product";
import Payment from "./pages/Payment";
import PaymentSuccess from "./pages/PaymentSuccess";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/product/:id" element={<Product />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/category" element={<Category />}/>
      <Route path="/payment" element={<Payment />}/>
      <Route path="/payment/success" element={<PaymentSuccess />}/>
      <Route path="*" element={<PageNotFound />}/>
    </Routes>
  );
}

export default App;

