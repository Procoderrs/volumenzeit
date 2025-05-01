import './style.css';
function WatchDesignSteps() {
  return (

    <div className='flex flex-col  py-12 justify-center items-center'>

    
    <div className="step-container w-full  font-poppins">
      <div className="step"  data-step="1" data-aos="fade-right">
        <div className="circle-inner">1</div>
        <p>Case Color</p>
      </div>

      <div className="step" data-step="2" data-aos="fade-right" data-aos-delay="100">
        <div className="circle-inner">2</div>
        <p>Dial Design</p>
      </div>

      <div className="step" data-step="3" data-aos="fade-right" data-aos-delay="100">
        <div className="circle-inner">3</div>
        <p>Strap Type</p>
      </div>

      <div className="step" data-step="4" data-aos="fade-right">
        <div className="circle-inner">4</div>
        <p>Final Touch</p>
      </div>
    </div>
    <div>
    <button className=' mt-12 mb-[-40px]  font-poppins text-sm bg-black px-9 hover:bg-[#745cff] hover:border-b  border-black  hover:text-white py-4 text-center rounded-md flex items-center justify-center transition-all duration-300 ease-in-out'>
    <p>Design Your Watch</p>
    </button>
    </div>
    </div>
  );
}

export default WatchDesignSteps;
