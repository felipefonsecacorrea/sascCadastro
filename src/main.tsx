import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import "./index.css";

import Cadastro from "./pages/Cadastro";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
              
              <Cadastro />
            
          }
        />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
