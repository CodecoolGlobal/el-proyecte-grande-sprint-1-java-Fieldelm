import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import RecipePage from "./recipe/RecipePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FetchRecipes from "./recipe/allrecipes/FetchRecipes";
import AddRecipe from "./recipe/addrecipe/AddRecipe";
import RegisterPage from "./authorization/RegisterPage";
import LoginPage from "./authorization/LoginPage";
import AboutUs from './AboutUs';
import FirstAdvice from "./landingpage/advices/FirstAdvice";
import SecondAdvice from "./landingpage/advices/SecondAdvice";
import ThirdAdvice from "./landingpage/advices/ThirdAdvice";


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
              <Route path="about-us" element={<AboutUs/>}/>
              <Route path="first-advice" element={<FirstAdvice/>}/>
              <Route path="second-advice" element={<SecondAdvice/>}/>
              <Route path="third-advice" element={<ThirdAdvice/>}/>

          </Routes>
      </BrowserRouter>)
;


