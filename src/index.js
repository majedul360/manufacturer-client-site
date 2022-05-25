import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();
const stripePromise = loadStripe(
  "pk_test_51L0lILJNGKoLywBjp8ooTKXefeJR3jAchauqV3hNucQqldxxJgMMgMSPA6oQuRnyZ5Fl0l2TNHQ3ACzSHmbJS3yy00KApTWBSR"
);
root.render(
  <Elements stripe={stripePromise}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </QueryClientProvider>
  </Elements>
);
