
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(
  "pk_test_51RMhRw4cEytmVpwEr1vKkAJzbYOrlrbfVQe1EnPcFu0MAuVRtVcOLVJCkGotz9fY9Kb5vITL3JvXCrcSeHIOVCAM00WJsEuJ1Q"
);

createRoot(document.getElementById('root')).render(
  <Elements stripe={stripePromise}>
  <BrowserRouter>
      <App />
    </BrowserRouter>
    </Elements>
);
