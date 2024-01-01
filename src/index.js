import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context/productcontex";
import { FilterContextProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { Auth0Provider } from "@auth0/auth0-react";



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
  domain="dev-bovf2gcwnyo8ltpf.us.auth0.com"
  clientId="7F06y3Zux6wImefaS3pTGL94iruHOBsY"
  redirectUri={window.location.origin}>
  <AppProvider>
    <FilterContextProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FilterContextProvider>
  </AppProvider>
  </Auth0Provider>

);


reportWebVitals(); 