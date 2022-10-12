import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './component/App';
import RecipePage from "./component/RecipePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FetchRecipes from "./component/FetchRecipes";
import AddRecipe from "./component/AddRecipe";
import RegisterPage from "./component/RegisterPage";
import LoginPage from "./component/LoginPage";
import AboutUs from './component/AboutUs';
import { useState} from 'react';





const MainLayer = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
<BrowserRouter>
      <Routes>
          <Route path="/" element={<App isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}/>
          <Route path="all-recipes/recipeCard/:recipeId" element={<RecipePage />} />
          <Route path="all-recipes" element={<FetchRecipes />}/>
          <Route path="add-recipe" element={<AddRecipe/>}/>
          <Route path="register" element={<RegisterPage/>}/>
          <Route path="login" element={<LoginPage setIsLoggedIn={setIsLoggedIn}/>}/>
          <Route path="about-us" element={<AboutUs/>}/>

      </Routes>
  </BrowserRouter>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MainLayer/>
);


