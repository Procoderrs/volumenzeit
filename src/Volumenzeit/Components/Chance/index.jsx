import { useReducer } from 'react';
import bg from '../Images/bg.jpg';

// Reducer initial state
const initialState = {
  values: {
    email: '',
    name: '',
  },
  errors: {},
  isSubmitting: false,
  isSubmitted: false,
};

// Reducer function
function formReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        values: {
          ...state.values,
          [action.field]: action.value
        },
        errors: {
          ...state.errors,
          [action.field]: null
        }
      };

    case 'SET_ERRORS':
      return {
        ...state,
        errors: action.errors
      };

    case 'SUBMIT_START':
      return {
        ...state,
        isSubmitting: true
      };

    case 'SUBMIT_SUCCESS':
      return {
        ...initialState,
        isSubmitted: true
      };

    default:
      return state;
  }
}

function Chance() {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { values, errors, isSubmitting, isSubmitted } = state;

  // Validation rules
  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!values.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (values.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!values.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(values.email)) {
      newErrors.email = 'Invalid email address';
    }

    dispatch({ type: 'SET_ERRORS', errors: newErrors });
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch({ type: 'SUBMIT_START' });
      // Simulate API call
      setTimeout(() => {
        dispatch({ type: 'SUBMIT_SUCCESS' });
      }, 1500);
    }
  };

  const handleInputChange = (field, value) => {
    dispatch({ type: 'UPDATE_FIELD', field, value });
  };

  return (
    <div className="bg-cover bg-center py-12 bg-pink-400 w-full h-full overflow-hidden mx-auto px-4 relative text-white"
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
                  value={values.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
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
                  value={values.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
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