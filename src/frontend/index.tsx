import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App, AppProps } from "./components/App";
import "../styles/global.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductDetails } from "./components/pages/ProductDetails";
import { Layout } from "./components/templates/Layout/Layout";
import { Cart } from "./components/pages/Cart";

const container = document.getElementById("app")!;
const root = createRoot(container);

declare global {
  interface Window {
    APP_PROPS: AppProps;
  }
}

root.render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<App {...window.APP_PROPS} />} />
          <Route path='/products/:id' element={<ProductDetails />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>
);
