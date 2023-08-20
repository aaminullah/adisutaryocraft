import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './navbar/Navbar';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './about/About';
import Home from './home/Home';
import Product from './product/Product';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Navbar /> */}
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
