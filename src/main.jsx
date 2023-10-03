import "./index.css";

import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter} from 'react-router-dom';

import { ProductProvider } from './context/ProductContext';

import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ProductProvider>
      <App />
      </ProductProvider>
  </BrowserRouter>
);
