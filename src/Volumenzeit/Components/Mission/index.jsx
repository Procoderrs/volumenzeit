import './style.css'
import marketing from '../Images/marketing.png'


import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


function Mission(){

useEffect(() => {
      AOS.init({
        duration: 1000, // animation duration
         
      });
    }, []);


  const MARKETING=marketing
  return(
    
    <div className='w-full bg-black'>
      <div  id='mission' className="flex   flex-col lg:flex-row  w-full overflow-hidden">
  {/* Image div - smaller */}
  <div className='px-36 bg-black lg:px-0'>
  <div className="flex-[1] image-fade-right"> 
    <img
      src={MARKETING}
      alt="marketing-img"
      className="block w-full h-full"
    />
  </div>
  </div>

  {/* Text div - larger */}
  <div className="flex-[2]  py-28 bg-black     flex flex-col  lg:items-center  items-center justify-center">
    <div className="font-poppins flex    items-center flex-col text-white ">
    <h2 className="font-Space text-white float-right lg:px-36 text-center  sm:text-[42px] text-[28px]" data-aos="fade-left">OUR Mission</h2>

      <p className="px-4 md:px-24 mt-4 text-[14px] leading-7 md:leading-8 lg:text-start text-center  font-poppins max-w-[500px] md:max-w-[800px]  lg:max-w-[600px]" data-aos="fade-left">
        We have invested 6 year of our lifes to invent a new technology of
        production a 3D dials with quality of wristwatch industry.
        All what we need to turn on our imagination on maximum.
      </p>
      <p className="mt-8 px-4 md:px-14 max-w-[700px] font-poppins leading-7 lg:max-w-[500px] lg:text-start md:text-center text-center md:leading-8 text-[14px]" data-aos="fade-left">
        We love Out-of-the-box designs and believe there are many people who think the same.
      </p>

      <button className=' text-[14px] text-center mt-16 bg-[#745cff] px-8 py-4 rounded transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:border-b-2' data-aos="fade-left">
        Design Your Watch
      </button>
    </div>
  </div>
</div>
    </div>


  )
}

export default Mission;