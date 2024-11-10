import { createRoot } from "react-dom/client";
import {BrowserRouter as Router , Route , Routes, BrowserRouter} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from "./app";

const root = document.getElementById("root")

createRoot(root).render(
    <BrowserRouter>
     <App />
    </BrowserRouter>
)