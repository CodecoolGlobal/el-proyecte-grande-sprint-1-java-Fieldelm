import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './component/App';
import RecipePage from "./component/RecipePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FetchRecipes from "./component/FetchRecipes";
import AddRecipe from "./component/AddRecipe";
import RegisterPage from "./component/RegisterPage";
import LoginPage from "./component/LoginPage";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />}/>
          <Route path="all-recipes/recipeCard/:recipeId" element={<RecipePage />} />
          <Route path="all-recipes" element={<FetchRecipes />}/>
          <Route path="add-recipe" element={<AddRecipe/>}/>
          <Route path="register" element={<RegisterPage/>}/>
          <Route path="login" element={<LoginPage/>}/>
      </Routes>
  </BrowserRouter>
);


