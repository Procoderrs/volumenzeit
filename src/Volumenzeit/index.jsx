import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home';
import Features from './Components/Features';
import DesignWatch from './Components/DesignWatch';
import Mission from './Components/Mission';
import Watches from './Components/Watches';
import AboutUs from './Components/AboutUs';
import Chance from './Components/Chance';
import Footer from './Components/Footer';



function Loader()
{
  return(    
              
            
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-50'>
    <div className='border-[10px] border-[#735CFF]/70 rounded-full border-t-[10px] border-t-[#725cff] w-[75px] h-[75px] animate-spin'></div>
  </div>
  )
}
function Volumenzeit() {
  const [isLoading,setIsLoading] =useState(true)
  useEffect(()=>{
    const timer=setTimeout(()=>{
      setIsLoading(false)
    },2000)

    //cleanup function
    return()=>clearTimeout(timer)
  },[])
  return (

    <div className='relative'>
      {isLoading && <Loader/>}
      {!isLoading &&(
        <>
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
        </>
      )}

      



       
    </div>
  );
}

export default Volumenzeit;
