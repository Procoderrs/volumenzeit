import { useRef, useState, useEffect } from 'react';
import Video from '../Images/Video.mp4';
import poster from '../Images/video.png';

import './style.css'


import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutUs() {
  



  useEffect(() => {
      AOS.init({
        duration: 500, // animation duration
        once: true,     // animate only once
      });
    }, []);

  
  return (
    <div id='about'  className="px-6 w-full max-w-[1440px] mx-auto overflow-hidden  md:px-8 py-12 justify-between  flex flex-col items-center md:flex-row ">
      <div className='flex-1 '>
        <h2 className="font-orbitron text-3xl  text-center sm:text-start mb-2" data-aos="fade-right">ABOUT US</h2>
        <p className="text-[14px] sm:text-center text-start sm:max-w-[400px] leading:9 sm:leading-6 text-gray-500 font-poppins" data-aos="fade-right">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan volutpat tristique metus, nibh massa quam iaculis lectus. A dui nam phasellus porttitor nisi. Eget a quam est, eget dictum nisi. Sit donec aenean vivamus sagittis, blandit. Eleifend bibendum aliquet orci risus, velit. Lectus tellus amet </p>
      </div>

      {/* Video poster */}
      
        <div
          className="mt-6 flex-1 relative w-full cursor-pointer">
          <img src={poster} alt="Video Poster" className="w-full rounded-lg"  data-aos="fade-left"/>
          <div className="absolute inset-0 bg-[#665cf2] bg-opacity-50 rounded-lg flex items-center justify-center" data-aos="fade-left">

          </div>
        </div>
      

      {/* Video modal */}
      
    </div>
  );
}

export default AboutUs;
