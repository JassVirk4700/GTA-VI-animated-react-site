import React, { StrictMode } from "react";
import { createRoot, CreateRoot } from "react-dom/client"
import './index.css'
import App from "./app";

createRoot(document.getElementById('root')).render(
    <App/>
)