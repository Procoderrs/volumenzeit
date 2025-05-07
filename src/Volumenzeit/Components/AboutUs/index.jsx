import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import poster from '../Images/video.png';
import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutUs() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  const handleCloseVideo = () => {
    setIsVideoPlaying(false);
  };

  useEffect(()=>{
    if(isVideoPlaying){
      document.body.style.overflow='hidden';
    }
    else{
      document.body.style.overflow='';
    }
    return()=>{
      document.body.style.overflow='';
    }
},[isVideoPlaying])

  return (
    <div id='about' className="px-4 w-full max-w-[1440px] mx-auto overflow-hidden md:px-8 py-12 justify-between flex flex-col items-center md:flex-col lg:flex-row">
      <div className='flex-1 '>
        <h2 className="font-Space md:text-[42px] text-[28px] text-center sm:text-start md:text-center lg:text-start  mb-2" data-aos="fade-right">ABOUT US</h2>
        <p className="text-[14px] text-center sm:text-start mt-6 sm:max-w-[400px] lg:max-w-[450px] md:max-w-[700px] leading-9 sm:leading-7 text-[#939393] font-poppins" data-aos="fade-right">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Accumsan volutpat tristique metus, nibh massa quam iaculis lectus. 
          A dui nam phasellus porttitor nisi. Eget a quam est, eget dictum nisi. 
          Sit donec aenean vivamus sagittis, blandit. Eleifend bibendum aliquet orci risus,
           velit. Lectus tellus amet

        </p>
      </div>

      {/* Video poster */}
      <div className="mt-6 flex-1 relative w-full md:max-w-[600px] max-w-[300px] xs:max-w-[700px]  " data-aos="fade-left">
        <div 
          className="relative cursor-pointer group"
          onClick={handlePlayVideo}
        >
          <img 
            src={poster} 
            alt="Video Poster" 
            className="w-full rounded-lg transition-opacity duration-300 group-hover:opacity-90" 
          />
          <div className="absolute inset-0 bg-[#8e7dff] bg-opacity-80 rounded-lg flex items-center justify-center">
            <button className="play-button w-16 h-16 rounded-full bg-white bg-opacity-90 flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-[#665cf2]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* React Player Modal */}
      {isVideoPlaying && (
        <div className="fixed inset-0 bg-opacity-50  bg-black  z-50 flex flex-col items-center justify-center ">
          <div className="relative w-full max-w-4xl rounded-lg bg-white px-6  md:px-24 pt-12 pb-4">
            <button 
              onClick={handleCloseVideo}
              className="absolute top-6 right-10 text-[#665cf2] transition-colors duration-300"
            >
              close
            </button>
            <ReactPlayer
              url={('https://www.youtube.com/watch?v=s-x_HVCwKgI&pp=ygURdm9sdW1lbnplaXQgd2F0Y2g%3D')}
              playing={true}
              controls={true}
              width="100%"
              
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default AboutUs;
