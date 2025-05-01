import './style.css'
import logo from "../Images/logo.svg";

function Footer() {
  return (
    <div className="pt-12 mx-auto w-full max-w-[1440px] overflow-hidden">
      <div className=''>
        <img src={logo} alt="logo" className='w-[50%] sm:w-[30%] mx-auto'  data-aos="fade-up" />

        {/* Footer bottom bar */}
        <div className='mt-6 bg-[#fafbff] flex items-center justify-center w-full '  data-aos="fade-up">
          <p className='text-[10px] py-6 text-center m-0'>
            © Copyright 2022 wolumenzeit - All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
