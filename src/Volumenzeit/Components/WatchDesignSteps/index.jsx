import './style.css';
function WatchDesignSteps() {
  return (

    <div className='flex flex-col   max-w-[1440px]  py-6 md:py-12  '>

    
    <div className="step-container  ">
      <div className="step w-full"  data-step="1" data-aos="fade-right">
      <p className=' ' >Case Color</p>

        <div className="circle-inner ">1</div>
      </div>

      <div className="step w-full" data-step="2" data-aos="fade-right" data-aos-delay="100">
      <p className=' ' >Dial Design</p>

        <div className="circle-inner">2</div>
      </div>

      <div className="step w-full" data-step="3" data-aos="fade-right" data-aos-delay="100">
      <p className='font-poppins ' >Strap Type</p>

        <div className="circle-inner">3</div>
      </div>

      <div className="step w-full" data-step="4" data-aos="fade-right">
      <p className=' ' >Final Touch</p>

        <div className="circle-inner">4</div>
      </div>
    </div>

    

    <div className='flex items-end justify-center'>
    <button className='   md:mt-12 mb-[-40px]  font-poppins text-sm bg-black px-9
     hover:bg-[#745cff] hover:border-b 
     border-black  hover:text-white py-5 text-center rounded-md 
     flex items-center justify-center transition-all duration-300 ease-in-out'>
    <p>Design Your Watch</p>
    </button>
    </div>
    </div>
  );
}

export default WatchDesignSteps;
