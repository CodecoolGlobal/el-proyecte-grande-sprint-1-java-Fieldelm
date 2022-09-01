import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import RecipePage from "./RecipePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />}/>
          <Route path="recipeCard/:recipeId" element={<RecipePage />} />
      </Routes>
  </BrowserRouter>
);


