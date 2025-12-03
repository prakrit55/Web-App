import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "animate.css";
import "./index.css";
import App from "./App.jsx";

import Navbar from "./components/common/Navbar.jsx";
import Footer from "./components/common/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <App />
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
