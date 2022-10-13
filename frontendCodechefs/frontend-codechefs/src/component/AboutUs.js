import React from 'react'
import Header from './Header';

const AboutUs = () => {
  return (
    <div>
        <Header/>
        <div className="about-us-container">

    <div className="recipe-container" >
    <div className="about-us__text">
                    
                    <h1>Dani</h1>
                    <p>cserdniel@hotmail.com</p>
                                      

                </div>
  
   
    <div className="about-us__text">
                    
                    <h1>Réka</h1>
                      <p>debreka@gmail.com</p>                

                </div>
    

    <div className="about-us__text">
                    
                    <h1>Kristóf</h1>    
                      <p>the chef</p>
                       <p>kristofmolnar553@gmail.com</p>               

                </div>
    </div>
    <div className="recipe-container" id='motto'>
      <h1>"Everyone can cook."</h1>
      <h3>/Gusto/</h3> </div>
    </div>
    
    </div>
    
  )
}

export default AboutUs;
