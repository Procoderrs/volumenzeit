import "./style.css";
import Button from "../Button";
import SocialMediaIcons from "../SocialMediaIcons";
import watch from '../Images/watch.png';
import { Link } from "react-router";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // animate only once
    });
  }, []);

  return (
<div id="home" className="min-h-screen w-full max-w-[1440px] mx-auto bg-[#fafbff]  flex flex-col md:flex-row items-center justify-center px-4 font-poppins">
      

      {/* Text and Button Section */}
      <div className="flex-row flex ">

      
      <div className="flex flex-1 flex-col    text-center md:items-start md:text-start items-center px-4 sm:mt-0">
        <h2 className="text-5xl md:text-6xl leading-[70px] md:leading-[60px] max-w-[400px] font-orbitron mb-4">find Your DREAM Watch</h2>
        <p className="text-[#949494] text-[12px] text-center leading-8 md:text-start mb-4 max-w-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim facilisi
          elementum commodo ipsum. Aenean aenean adipiscing lect.
        </p>

        <button className="bg-[#745cff] transition-all duration-600 ease-in-out  mt-4 hover:bg-white hover:border-b text-[12px] hover:text-[#754cff] border-[#745cff] px-9 py-6 rounded-md text-white font-poppins">
          <Link to=''>Design Your Watch</Link>
        </button>

        <div className="mt-4 hidden lg:block ">
          <SocialMediaIcons />
        </div>

      <div className="absolute min-h-screen   left-[600px] top-[100px] right-0 hidden md:block">
        <img src={watch} alt={watch} className="w-full h-full object-contain" />
      </div>
</div>

      </div>

      {/* Image Section (Moves based on screen width) */}
      {/* Image Section */}
<div className="relative flex-1 mt-4 ">
  
  
  {/* For smaller screens, no animation or a different version */}
  <img
    src={watch}
    alt="Watch"
    className="w-full h-full relative object-contain block md:hidden " data-aos="zoom-in-up"
  />

  <div className="absolute md:hidden left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <SocialMediaIcons />
  </div>
</div>

    </div>
  );
}

export default Home;
