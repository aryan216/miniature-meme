import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import  Usercontext  from "./context/Usercontext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Usercontext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Usercontext>
  </StrictMode>
);
