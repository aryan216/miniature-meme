import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import  Usercontext  from "./context/Usercontext";
import CaptainContext from "./context/CaptainContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <CaptainContext>
    <Usercontext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Usercontext>
    </CaptainContext>
  </StrictMode>
);
