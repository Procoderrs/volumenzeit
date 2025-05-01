import './style.css'
import marketing from '../Images/marketing.png'


import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


function Mission(){

useEffect(() => {
      AOS.init({
        duration: 1000, // animation duration
        once: true,     // animate only once
      });
    }, []);


  const MARKETING=marketing
  return(
    <div  id='mission' className="flex   max-w-[1440px] mx-auto  flex-col md:flex-row  w-full overflow-hidden">
  {/* Image div - smaller */}
  <div className="flex-[1] image-fade-right"> 
    <img
      src={MARKETING}
      alt="marketing-img"
      className="block w-full h-auto"
    />
  </div>

  {/* Text div - larger */}
  <div className="flex-[2] bg-black py-12   flex flex-col items-center justify-center">
    <h2 className="font-orbitron text-white  float-left sm:text-5xl text-2xl" data-aos="fade-left">OUR Mission</h2>
    <div className="font-poppins flex items-center flex-col text-white text-[12px]">
      <p className="px-4 md:px-12 mt-4 text-[15px] leading-9 font-poppins max-w-[500px]" data-aos="fade-left">
        We have invested 6 year of our lifes to invent a new technology of
        production a 3D dials with quality of wristwatch industry.
        All what we need to turn on our imagination on maximum.
      </p>
      <p className="mt-12 px-4 md:px-12 max-w-[500px] leading-9 text-[15px]" data-aos="fade-left">
        We love Out-of-the-box designs and believe there are many people who think the same.
      </p>

      <button className=' text-[15px] text-center mt-16 bg-[#745cff] px-8 py-4 rounded' data-aos="fade-left">
        Design Your Watch
      </button>
    </div>
  </div>
</div>


  )
}

export default Mission;