import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home';
import Features from './Components/Features';
import DesignWatch from './Components/DesignWatch';
import Mission from './Components/Mission';
import Watches from './Components/Watches';
import AboutUs from './Components/AboutUs';
import Chance from './Components/Chance';
import Footer from './Components/Footer';
function Volumenzeit() {
  return (
    <div>
       <Navbar/> 

               <Home/> 
       <Features heading='FEATURES' 

        p='Volumenzeit gives you a total of 48 style combinations 
        with 4 dial types, 4 dial colors, 3 case colors, multiple 
        stylish strap combinations,
         and customized engraving options.'/> 
     <DesignWatch/>
    <Mission/>
     <Watches/>
   <AboutUs/>  
    <Chance/>
    <Footer/>
    </div>
  );
}

export default Volumenzeit;
