import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/main.css";

import { BrowserRouter } from "react-router-dom";
import { AlbumApp } from "./AlbumApp.jsx";
import { AlbumProvider } from "./context/AlbumProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <AlbumProvider>
        <AlbumApp />
      </AlbumProvider>
    </React.StrictMode>
  </BrowserRouter>
);
