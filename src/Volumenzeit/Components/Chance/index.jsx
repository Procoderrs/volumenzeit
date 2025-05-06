import bg from '../Images/bg.jpg'; 

function Chance() {
  return (
    <div
      className="bg-cover bg-center py-12 bg-pink-400  w-full max-w-[1440px] overflow-hidden  mx-auto px-4 relative text-white"
      style={{ backgroundImage: `url(${bg})` }}>
<div className='flex flex-col'>
<div className='flex items-center flex-col   justify-center'>
      <h2 className='font-poppins text-[28px] md:text-4xl  leading-10 text-center font-bold' data-aos="fade-up">Don't Miss Your Chance To Get Free Giveaway. Sign Up to Our Newsletter</h2>

   <p className='pt-12 font-poppins text-center text-[14px] leading-8 sm:text-[14px]' data-aos="fade-up">We will inform you about coming Giveaways, Offers, Online Store preparation progress and start of sales.</p>

      </div>
           
     <div className='mt-8 flex items-center gap-6 font-poppins  justify-center   flex-col'>
        
        <form>

       
        <div className='flex flex-col  md:flex-row  gap-6'>
        <input type="text" placeholder='Name' className='bg-white px-6   py-5 rounded-md' data-aos="fade-right" />
      <input type="text" placeholder='Email' className='bg-white px-6   py-5 rounded-md' data-aos="fade-left" />
        </div>
        </form>
          <button className='bg-black text-white px-12 text-[12px] py-5 rounded-md text-center '  data-aos="fade-up">Sign Up</button>
           
    <div>
    <p className='text-white mt-6 text-[12px] font-poppins text-center'  data-aos="fade-up"> You agree to Our Terms and Conditiion </p>

</div>
     </div>
</div>
      

    </div>
  );
}

export default Chance;
