import "./style.css";
import SocialMediaIcons from "../SocialMediaIcons";
import watch from '../Images/watch.png';
import { Link } from "react-router";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div id="home" className="min-h-screen w-full max-w-[1440px] mx-auto bg-[#fafbff] flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-16 font-poppins relative overflow-hidden">
      {/* Text Content */}
      <div className="flex-1 z-10 pt-16 md:pt-0 text-center md:text-left">
        <h2 className="text-5xl md:text-6xl leading-[70px] md:leading-[80px] max-w-[500px] font-orbitron mb-4">
          Find Your DREAM Watch
        </h2>
        <p className="text-[#949494] text-sm md:text-base leading-6 md:leading-8 mb-6 max-w-md mx-auto md:mx-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim facilisi
          elementum commodo ipsum. Aenean aenean adipiscing lect.
        </p>

        <button className="bg-[#745cff] hover:bg-white hover:text-[#745cff] border-2 border-transparent hover:border-[#745cff] transition-all duration-300 text-sm md:text-base px-6 py-3 md:px-9 md:py-4 rounded-md text-white font-poppins mb-8">
          <Link to=''>Design Your Watch</Link>
        </button>

        <div className="hidden md:block mt-8">
          <SocialMediaIcons />
        </div>
      </div>

      {/* Mobile Image with Social Icons */}
      <div className="md:hidden relative w-full mt-8">
        <img
          src={watch}
          alt="Watch"
          className="w-full h-auto object-contain mx-auto relative"
          data-aos="zoom-in-up"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <SocialMediaIcons />
        </div>
      </div>

      {/* Desktop Background Image */}
      <div className="hidden md:block absolute inset-0 overflow-hidden z-0">
        <img
          src={watch}
          alt="Watch"
          className="absolute right-0 top-[-80px] w-auto h-[120%] object-contain origin-top-right"
          style={{
            transform: 'translateX(25%) '
          }}
        />
      </div>
    </div>
  );
}

export default Home;