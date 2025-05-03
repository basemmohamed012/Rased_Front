import React, { useEffect, useState } from 'react';
import backImg from '../../assets/images/G.svg';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-toastify';
import { Spinner } from '../helpers/Spinner';
import { API_BASE_URL, ACCOUNT_STATUS } from '../../constants/AppConstants';

const ResetPwdVerify = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(true);
  const [formData, setFormData] = useState({
    email: ''
  });
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  
  useEffect(() => {
    if(localStorage.getItem('acc-stat') === ACCOUNT_STATUS.RESET_PASSWORD) {
      window.history.back();
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Function to handle input changes
  const handleChange = (e) => {
    let { id, value } = e.target;
    
    // Map the HTML id to the formData property
    const fieldMap = {
      'email': 'email'
    };
    
    const field = fieldMap[id] || id;
    
    setFormData({
      ...formData,
      [field]: value
    });

    console.log('Form Data:', formData); // Debugging line to check form data
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    
    // Validate form data
    if (!formData.email) {
      setError('البريد الإلكتروني مطلوب ❌');
      return;
    }
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError(['يرجى إدخال بريد إلكتروني صالح ❌']);
      return false;
    }

    try {
      setIsSubmitting(true);
      
      // Send data to the backend
      const response = await axios.post(`${API_BASE_URL}/Auth/Password/Forgot`, {
        email: formData.email
      });
      
      // Store Some Data
      localStorage.setItem('acc-stat', ACCOUNT_STATUS.RESET_PASSWORD);
      localStorage.setItem('otp', 'false');
      localStorage.setItem('user-email', formData.email);
      localStorage.setItem('message', response.data.message);
      
      // Redirect to login or dashboard
      navigate('/verify-otp');
      
    } catch (err) {
      // Check if the response has errors
      if(err.status !== 200 || !err.response.data.succeeded) {
        let errors = err.response.data.errors;
        let message = 'جميع الحقول مطلوبة ❌';
        // check if the errors property is array
        if(Array.isArray(err.response.data.errors) && err.response.data.errors.length > 0) {
          message = errors.join(', ');
        }
        else {
          // check if the errors property is object
          if(typeof errors === 'object') {
            message = Object.values(errors).join(', ');
          }
        }
        setError(message);

        return;
      }
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <>
      { loading ? (
        <Spinner loading={loading} />
      ) : (
        <div className="relative w-full min-h-screen overflow-hidden">
          {/* Background Image */}
          <img
            className="hidden lg:block absolute lg:right-[120px] inset-0 w-full h-full object-cover z-0"
            src={backImg}
            alt="background"
          />

          {/* Main Content */}
          <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-8">
            <form 
              onSubmit={handleSubmit}
              className="bg-white border-2 rounded-tr-[100px] rounded-bl-[100px] shadow-lg px-6 py-8 w-full max-w-md h-auto flex flex-col gap-4"
            >
              <h2 className="text-[22px] font-bold mt-10 text-maincolor text-center">إعادة تعيين كلمة المرور 🔐</h2>
              <p className="text-sm text-gray-500 text-simibold text-center">
                تحقق من البريد الإلكتروني الخاصة بك.
              </p>
              
              {/* Error message display */}
              {error && (
                <div className="p-2 bg-red-100 border border-red-400 text-red-700 rounded text-center">
                  {error}
                </div>
              )}

              <div className="flex flex-col w-full gap-2 my-5">
                <label className="text-maincolor font-bold text-[14px]" htmlFor="email">البريد الإلكتروني</label>
                <input 
                  dir="ltr" 
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-2 rounded border-2 border-graycolor focus:border-maincolor w-full" 
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full h-[48px] rounded-[5px] bg-maincolor mb-4 hover:bg-white hover:text-[#16423C] hover:border-2 hover:border-[#16423C] text-white text-sm font-semibold tracking-wide transition-colors duration-200 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'جاري التحقق ...' : 'إرســـال'}
              </button>

              <div className="text-center mb-6">
                  <p className="text-maincolor text-[14px] font-bold">
                    رجوع إلي ... {' '}
                    <span onClick={() => navigate('/signup')} className="text-gray-400 hover:underline hover:text-maincolor cursor-pointer">
                      تسجيل الدخول
                    </span>
                  </p>
                </div>
            </form>
          </div>

          {/* Footer note */}
          <div className="mb-4 text-center px-4 z-20">
            <p className=''>كل الحقوق محفوظة لدي راصــــد &copy; 2025</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ResetPwdVerify;
