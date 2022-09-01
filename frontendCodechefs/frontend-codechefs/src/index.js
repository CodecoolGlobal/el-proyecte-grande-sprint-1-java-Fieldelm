import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Invoices from "./Invoices";
import {BrowserRouter, Route, Routes} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />}/>
          <Route path="invoices" element={<Invoices />} />
      </Routes>
  </BrowserRouter>
);


