import { useState } from 'react';
import bg from '../Images/bg.jpg';

function Chance() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validation rules
  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    } else if (name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Invalid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setName('');
        setEmail('');
      }, 1500);
    }
  };

  return (
    <div className="bg-cover bg-center py-12 bg-pink-400 w-full   h-full overflow-hidden mx-auto px-4 relative text-white"
      style={{ backgroundImage: `url(${bg})` }}>
      
      <div className='flex flex-col'>
        <div className='flex items-center flex-col justify-center'>
          <h2 className='font-poppins text-[28px] md:text-4xl leading-10 text-center font-bold' data-aos="fade-up">
            Don't Miss Your Chance To Get Free Giveaway. Sign Up to Our Newsletter
          </h2>

          <p className='pt-12 font-poppins text-center text-[14px] leading-8 sm:text-[14px]' data-aos="fade-up">
            We will inform you about coming Giveaways, Offers, Online Store preparation progress and start of sales.
          </p>
        </div>

        <div className='mt-8 flex items-center gap-6 font-poppins justify-center flex-col'>
          <form onSubmit={handleSubmit} className=''>
            <div className='flex flex-col md:flex-row gap-6'>
              <div className=''>
                <input 
                  type="text" 
                  placeholder='Name' 
                  className={`bg-white text-black px-6 py-5 rounded-md w-full ${
                    errors.name ? 'border-2 border-red-500' : ''
                  }`}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  data-aos="fade-right"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm mt-1 block">{errors.name}</span>
                )}
              </div>

              <div className=''>
                <input 
                  type="email" 
                  placeholder='Email' 
                  className={`bg-white px-6 py-5 text-black rounded-md w-full ${
                    errors.email ? 'border-2 border-red-500' : ''
                  }`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  data-aos="fade-left"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm mt-1 block">{errors.email}</span>
                )}
              </div>
            </div>

            <div className='flex items-center justify-center'>
            <button 
  type="submit" 
  className={`bg-black text-white px-16 transition-all duration-300 ease-in-out hover:bg-[#735cff] hover:border-b-2 border-b-2 border-transparent hover:border-black text-[12px] py-5 rounded-md text-center mt-6 ${
    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
  }`}
  disabled={isSubmitting}
  data-aos="fade-up"
>
  {isSubmitting ? 'Submitting...' : 'Sign Up'}
</button>
            </div>
          </form>

          {isSubmitted && (
            <p className="text-green-500 text-center mt-4" data-aos="fade-up">
              Thank you for subscribing!
            </p>
          )}

          <div>
            <p className='text-white mt-6 text-[12px] font-poppins text-center' data-aos="fade-up">
              You agree to Our Terms and Conditions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chance;