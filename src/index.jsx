import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import ContextProvider from "./Components/utils/global.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/home" element={<Home />} />
          <Route path="/dentist/:id" element={<Detail />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/favs" element={<Favs />} />
        </Route>
        <Route path="*" element={<div>Page not found - Error 404</div>} />
      </Routes>
    </BrowserRouter>
  </ContextProvider>
);
