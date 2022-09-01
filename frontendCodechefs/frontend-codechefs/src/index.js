import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './component/App';
import RecipePage from "./component/RecipePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FetchRecipes from "./component/FetchRecipes";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />}/>
          <Route path="all-recipes/recipeCard/:recipeId" element={<RecipePage />} />
          <Route path="all-recipes" element={<FetchRecipes />}/>
      </Routes>
  </BrowserRouter>
);


